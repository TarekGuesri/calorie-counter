const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const {
  getFoods,
  addFood,
  editFood,
  deleteFood,
  getAvailableFoods,
} = require('../../controllers/foods');

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
  addFood
);

// @route GET foods/available
// @desc Gets available foods for the list (foods that belong to the user)
// @access Private
router.get('/available', auth, getAvailableFoods);

// @route PUT foods/:id
// @desc Edits a food
// @access Private
router.put('/:id', auth, editFood);

// @route DELETE foods/:id
// @desc Deletes a food
// @access Private
router.delete('/:id', auth, deleteFood);

module.exports = router;
