const mongoose = require('mongoose');
const fs = require('fs');
const sharp = require('sharp');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caloriesPerPortion: {
    type: Number,
    min: 1,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

foodSchema.statics.addImage = async (foodId, imageFile) => {
  // We create a temporary file for the image so we can resize it using sharp
  const tmpPath = `uploads/images/foods/${foodId}-tmp.png`;
  await imageFile.mv(tmpPath);

  const path = `uploads/images/foods/${foodId}.png`;

  await sharp(tmpPath)
    .resize({ width: 600 })
    .flatten({
      background: 'white',
    })
    .toFile(path);

  try {
    // We delete the temporary file
    fs.unlinkSync(tmpPath);

    // now return the function's value with the file path
    return path;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoose.model('Food', foodSchema);
