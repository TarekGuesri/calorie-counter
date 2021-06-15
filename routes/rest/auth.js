const express = require('express');
const router = express.Router();

// @route POST auth/register
// @desc Test route
// @access Public
router.post('/register', (req, res) => {
  res.json('Registered');
});

module.exports = router;
