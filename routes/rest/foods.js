const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const { getFoods, addFood } = require('../../controllers/foods');

const router = express.Router();

// @route GET foods/
// @desc Gets all foods
// @access Public
router.get('/', getFoods);

// @route POST foods/
// @desc Adds a food
// @access Private
router.post(
  '/',
  auth,
  check('name', 'Name is required').notEmpty(),
  check('caloriesPerPortion', 'Calories per portion must at least 1').isInt({
    min: 1,
  }),
  check('user', 'User is required').notEmpty(),
  addFood
);

module.exports = router;
