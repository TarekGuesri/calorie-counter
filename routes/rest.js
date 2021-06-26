const express = require('express');
const router = express.Router();

// Auth routes
router.use('/auth', require('./rest/auth'));

// Consumption routes
router.use('/consumptions', require('./rest/consumptions'));

// Foods routes
router.use('/foods', require('./rest/foods'));

module.exports = router;
