const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
    min: 1,
  },
  weight: {
    type: Number,
    required: true,
    min: 1,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
});

module.exports = mongoose.model('Profile', profileSchema);
