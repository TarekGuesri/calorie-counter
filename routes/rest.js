const express = require('express');
const router = express.Router();

// Test routes
router.use('/test', require('./rest/test'));

module.exports = router;
