const { validationResult } = require('express-validator');

const User = require('../models/User');
const Food = require('../models/Food');
const ConsumptionList = require('../models/ConsumptionList');

const errorLogger = require('../utils/errorLogger');

exports.getConsumptionList = async (req, res) => {
  res.json('getConsumptionList');
};

exports.updateConsumptionList = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let consumptionList = await ConsumptionList.findOne({ user: req.user.id });

  // We check if the user has a consumption list, if not, we create it
  if (!consumptionList) {
    consumptionList = new ConsumptionList({
      user: req.user.id,
    });
  }

  // TODO : add an array schema validation
  const { consumptions } = req.body;

  consumptionList.consumptions = consumptions;

  await consumptionList.save();

  res.json('Consumption List has been updated');
};
