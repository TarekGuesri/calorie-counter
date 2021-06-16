const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
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

  const { email, password } = req.body;

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

    // TODO : Add remember me option to extend jwt duration

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

exports.checkSelf = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) return res.status(404).json({ msg: 'User not found!' });
  res.json(user);
};
