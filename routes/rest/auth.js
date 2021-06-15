const express = require('express');
const { check } = require('express-validator');

const { registerUser } = require('../../controllers/auth');

const router = express.Router();

// @route POST auth/register
// @desc Test route
// @access Public
router.post(
  '/register',
  check('password', 'Password must be at least 6 characters').isLength({
    min: 6,
  }),
  registerUser
);

module.exports = router;
