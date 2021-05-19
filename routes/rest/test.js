const express = require('express');
const router = express.Router();

// @route POST test/
// @desc Test route
// @access Public
router.get('/', (req, res) => {
  res.json('Test');
});

module.exports = router;
