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

  // If image was sent, we check its extension
  if (req.files && req.files.image) {
    console.log(req.files.image);

    const extension = req.files.image.name.split('.').pop();

    const imageExtensions = ['jpg', 'jpeg', 'png'];

    if (!imageExtensions.includes(extension)) {
      return res.status(400).json({
        errors: [{ param: 'image', msg: 'Please include a valid image file' }],
      });
    }
  }

  const { name, caloriesPerPortion } = req.body;
  let user = req.user.id;

  try {
    user = await User.findById(user);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // TODO : Check if there is a food with the same name for the user (to avoid duplicates)

    // Adding the Food
    let food = await Food.create({ name, caloriesPerPortion, user: user.id });

    // If image was uploaded, we save it and added its path to the food's image
    if (req.files && req.files.image) {
      console.log(req.files.image);

      const image = await Food.addImage(food.id, req.files.image);
      console.log('image: ', image);

      // Now we add the image path to the food's image field
      food.image = image;
      await food.save();
    }

    res.json('Food was added successfully');
  } catch (error) {
    errorLogger(req, 1, error);
    res.status(500).send('Server error');
  }
};
