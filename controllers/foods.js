const { validationResult } = require('express-validator');
const fs = require('fs');

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

    //Checking if there is a food with the same name for the user (to avoid duplicates)
    let food = await Food.findOne({ name, user: user.id });
    if (food) {
      return res.status(400).json({
        errors: [
          { param: 'name', msg: 'You already have a food with this name' },
        ],
      });
    }

    // Adding the Food
    food = await Food.create({ name, caloriesPerPortion, user: user.id });

    // If image was uploaded, we save it and added its path to the food's image
    if (req.files && req.files.image) {
      const image = await Food.addImageImgur(food.id, req.files.image);

      // Now we add the image path to the food's image field
      food.image = image;
      await food.save();
    }

    res.json('The food was added successfully');
  } catch (error) {
    errorLogger(req, 1, error);
    res.status(500).send('Server error');
  }
};

exports.editFood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { replaceCurrentImage } = req.body;
  // If user chose replacing current image and image was sent, we check its extension
  if (replaceCurrentImage && req.files && req.files.image) {
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

    //Checking if there is another food with the same name for the user (to avoid duplicates)
    let food = await Food.findOne({
      name,
      user: user.id,
      _id: { $ne: req.params.id },
    });
    if (food) {
      return res.status(400).json({
        errors: [
          { param: 'name', msg: 'You already have a food with this name' },
        ],
      });
    }

    // Getting the Food
    food = await Food.findById(req.params.id);

    // Changing it with the new values
    food.name = name;
    food.caloriesPerPortion = caloriesPerPortion;

    // If user chose to replace the current image, we remove it
    if (replaceCurrentImage) {
      // Removing current image file if it exists
      if (food.image) {
        // await Food.removeImage(food._id);
        food.image = '';
      }

      // If image was uploaded, we save it and add its path to the food's image
      if (req.files && req.files.image) {
        const image = await Food.addImageImgur(food.id, req.files.image);

        // Now we add the image path to the food's image field
        food.image = image;
      }
    }

    await food.save();

    res.json('The food was updated successfully');
  } catch (error) {
    errorLogger(req, 1, error);
    res.status(500).send('Server error');
  }
};

exports.deleteFood = async (req, res) => {
  try {
    let food = await Food.findOne({ _id: req.params.id, user: req.user.id });

    if (!food) {
      return res.status(404).send("Food doesn't exist");
    }

    // Getting user's consumption list to check if this food exists on it
    let consumptionList = await ConsumptionList.findOne({ user: req.user.id });

    if (consumptionList) {
      // We delete the food from the consumption list if it exists
      consumptionList.consumptions = consumptionList.consumptions.filter(
        (consumption) => consumption.food.toString() !== food._id.toString()
      );

      await consumptionList.save();
    }

    // Deleting the food
    await food.delete();

    res.json('The food was deleted successfully');
  } catch (error) {
    errorLogger(req, 1, error);
    res.status(500).send('Server error');
  }
};
