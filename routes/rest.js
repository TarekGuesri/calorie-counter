const express = require('express');
const router = express.Router();

// Test routes
router.use('/auth', require('./rest/auth'));

module.exports = router;
