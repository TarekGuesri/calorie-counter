const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const {
  registerUser,
  loginUser,
  checkSelf,
  updateProfile,
} = require('../../controllers/auth');

const router = express.Router();

// @route GET auth/
// @desc Get self data
// @access Private
router.get('/', auth, checkSelf);

// @route POST auth/register
// @desc Registers a user
// @access Public
router.post(
  '/register',
  check('username', 'Username is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({
    min: 6,
  }),
  registerUser
);

// @route POST auth/login
// @desc Logs in a user
// @access Public
router.post(
  '/login',
  check('email', 'Email is required').notEmpty(),
  check('password', 'Password is required').notEmpty(),
  loginUser
);

// @route PUT auth/profile
// @desc Logs in a user
// @access Public
router.put(
  '/profile',
  check('weight', 'Weight must be at least 1').isInt({ min: 1 }),
  check('height', 'Height must be at least 1').isInt({ min: 1 }),
  check('age', 'Age must be at least 1').isInt({ min: 1 }),
  check('gender', 'Gender has to be either male or female').isIn([
    'male',
    'female',
  ]),
  updateProfile
);

module.exports = router;
