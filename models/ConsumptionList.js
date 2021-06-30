const mongoose = require('mongoose');

const consumptionListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  consumptions: [
    {
      food: {
        type: mongoose.Schema.ObjectId,
        ref: 'Food',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('ConsumptionList', consumptionListSchema);
