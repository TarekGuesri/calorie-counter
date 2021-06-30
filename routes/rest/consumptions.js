const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const {
  getConsumptionList,
  updateConsumptionList,
} = require('../../controllers/consumptions');

const router = express.Router();

// @route GET consumptions/list
// @desc Gets consumption list
// @access Private
router.get('/list', auth, getConsumptionList);

// @route PUT consumptions/list
// @desc Updates consumption list
// @access Private
router.put(
  '/list',
  auth,
  check('consumptions', 'Consumptions must be an array').isArray(),
  updateConsumptionList
);

module.exports = router;
