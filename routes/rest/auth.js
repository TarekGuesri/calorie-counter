const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const {
  registerUser,
  loginUser,
  checkSelf,
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
  check('username', 'Username is required').not().isEmpty(),
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
  check('email', 'Email is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty(),
  loginUser
);

module.exports = router;
