const { validationResult } = require('express-validator');

const User = require('../models/User');
const Food = require('../models/Food');
const ConsumptionList = require('../models/ConsumptionList');
const errorLogger = require('../utils/errorLogger');

exports.getFoods = async (req, res) => {
  res.json('getFoods');
};

exports.getAvailableFoods = async (req, res) => {
  const availableFoods = await Food.find({ user: req.user.id });

  return res.json(availableFoods);
};

exports.addFood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // TODO : Add image
  const { name, caloriesPerPortion } = req.body;
  let { user } = req.body;

  try {
    user = await User.findById(user);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Adding the Food
    const food = await Food.create({ name, caloriesPerPortion, user: user.id });

    res.json('Food added successfully');
  } catch (error) {
    errorLogger(req, 1, error);
    res.status(500).send('Server error');
  }
};
