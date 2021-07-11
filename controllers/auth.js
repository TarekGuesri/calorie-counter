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
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({
        errors: [
          {
            param: 'email',
            msg: 'Email already exists',
            value: '',
          },
        ],
      });
    }

    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            param: 'username',
            msg: 'Username already exists',
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

    // TODO : create a profile for the user

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
  const user = await User.findById(req.user.id).select('-password');
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
