const mongoose = require('mongoose');

const consumptionSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.ObjectId,
    ref: 'Food',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Consumption', consumptionSchema);
