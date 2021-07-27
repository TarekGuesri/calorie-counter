const mongoose = require('mongoose');
const fs = require('fs');
const sharp = require('sharp');
const imgur = require('imgur');

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
    // get: getImage,
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
  // We use a random string so we can add it to the temporary file name to avoid sharp's bug of getting old images
  let randomString = Math.random().toString(36).substring(7);

  // We create a temporary file for the image so we can resize it using sharp
  const tmpPath = `uploads/images/foods/${foodId}-${randomString}.png`;
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

foodSchema.statics.removeImage = (foodId) => {
  const path = `uploads/images/foods/${foodId}.png`;
  try {
    fs.unlinkSync(path);
    return;
  } catch (err) {
    console.error(err);
  }
};

foodSchema.statics.addImageImgur = async (foodId, imageFile) => {
  // We use a random string so we can add it to the temporary file name to avoid sharp's bug of getting old images
  let randomString = Math.random().toString(36).substring(7);

  // We create a temporary file for the image so we can resize it using sharp
  const tmpPath = `uploads/images/foods/${foodId}-${randomString}.png`;
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
    // Uploading image to imgur.com since Heroku stores files temoporarily
    const res = await imgur.uploadFile(filePpath);

    // We delete the temporary files
    fs.unlinkSync(tmpPath);
    fs.unlinkSync(filePpath);

    // now return the function's value with the file path
    return res.link;
  } catch (err) {
    console.error(err);
  }
};

foodSchema.set('toObject', { getters: true });
foodSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Food', foodSchema);
