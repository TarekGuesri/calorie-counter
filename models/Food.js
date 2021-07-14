const mongoose = require('mongoose');
const fs = require('fs');
const sharp = require('sharp');

const getImage = (image) => {
  if (image) {
    return process.env.BASE_URL + image;
  }
};

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
    get: getImage,
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

  // The image path that's going ot be used as a link
  const path = `images/foods/${foodId}.png`;
  // The image path on the host
  const filePpath = `uploads/${path}`;

  await sharp(tmpPath)
    .resize({ width: 600 })
    .flatten({
      background: 'white',
    })
    .toFile(filePpath);

  try {
    // We delete the temporary file
    fs.unlinkSync(tmpPath);

    // now return the function's value with the file path
    return path;
  } catch (err) {
    console.error(err);
  }
};

foodSchema.set('toObject', { getters: true });
foodSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Food', foodSchema);
