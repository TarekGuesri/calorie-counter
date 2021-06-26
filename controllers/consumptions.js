const { validationResult } = require('express-validator');

const User = require('../models/User');
const Food = require('../models/Food');
const errorLogger = require('../utils/errorLogger');

exports.getConsumptionList = async (req, res) => {
  res.json('list');
};
