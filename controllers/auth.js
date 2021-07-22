const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Profile = require('../models/Profile');
const errorLogger = require('../utils/errorLogger');

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Checking if the email is already in use
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({
        errors: [
          {
            param: 'email',
            msg: 'Email already in use',
            value: '',
          },
        ],
      });
    }

    // Checking if the username is already in use
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            param: 'username',
            msg: 'Username already in use',
            value: '',
          },
        ],
      });
    }

    // Creating the user
    user = new User({
      username,
      email,
    });

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Saving the user
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '2 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    errorLogger(req, 2, error);
    res.status(500).send('Server error');
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, remember } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        errors: [{ param: 'email', msg: 'Email or password is incorrect' }],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        errors: [{ param: 'email', msg: 'Email or password is incorrect' }],
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const expiresIn = remember ? '60 days' : '2 days';

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    errorLogger(req, 2, error);
    res.status(500).send('Server error');
  }
};

exports.checkSelf = async (req, res) => {
  const user = await User.findById(req.user.id)
    .select('-password')
    .populate('profile');
  if (!user) return res.status(404).json({ msg: 'User not found!' });
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let user = await User.findById(req.user.id);

  const { weight, height, age, gender } = req.body;
  let profile = null;
  // If user doesn't have a profile, we create it. If they do, we just update it
  if (user.profile) {
    profile = await Profile.findById(user.profile);
    profile.weight = weight;
    profile.height = height;
    profile.age = age;
    profile.gender = gender;
    profile.save();
  } else {
    profile = await Profile.create({ weight, height, age, gender });
    user.profile = profile.id;
    await user.save();
  }

  res.json('Profile updated');
};

exports.updateSelf = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checking password's length
  const { password } = req.body;
  if (password && password.length < 6) {
    return res.status(400).json({
      errors: [
        {
          param: 'password',
          msg: 'Passwrod must be at least 6 characters',
          value: '',
        },
      ],
    });
  }

  const { username, email } = req.body;

  try {
    // Checking if user in use
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Checking if the email is already in use
    const emailAlreadyExists = await User.findOne({
      email,
      _id: { $ne: user.id },
    });
    if (emailAlreadyExists) {
      return res.status(400).json({
        errors: [
          {
            param: 'email',
            msg: 'Email already in use',
            value: '',
          },
        ],
      });
    }

    // Checking if the username is already in use
    const usernameAlreadyExists = await User.findOne({
      username,
      _id: { $ne: user.id },
    });
    if (usernameAlreadyExists) {
      return res.status(400).json({
        errors: [
          {
            param: 'username',
            msg: 'Username already in use',
            value: '',
          },
        ],
      });
    }

    // If user entered a password, we change it
    if (password) {
      const { oldPassword } = req.body;

      // Checking if the old password matches
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [
            { param: 'oldPassword', msg: 'Old password is not correct' },
          ],
        });
      }

      // Hashing the password and changing it
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Changing user info
    user.username = username;
    user.email = email;

    // Saving the user
    await user.save();

    res.json('User data changed successfully');
  } catch (error) {
    errorLogger(req, 2, error);
    res.status(500).send('Server error');
  }
};
