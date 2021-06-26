const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const { getConsumptionList } = require('../../controllers/consumptions');

const router = express.Router();

// @route GET consumptions/list
// @desc Get consumption list
// @access Private
router.get('/list', auth, getConsumptionList);

module.exports = router;
