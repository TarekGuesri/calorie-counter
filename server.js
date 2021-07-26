const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const mkdirp = require('mkdirp');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Enabling cors
app.use(cors());

// Adding uploads folder for food images
mkdirp.sync('uploads/images/foods');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// Making uploads folder public
app.use(express.static(path.resolve('./uploads')));

// Enabling file-upload
app.use(
  fileUpload({
    createParentPath: true, // This allows the mv method to create the path that has been passed
    limits: { fileSize: 25 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: 'The image file-size can not be more than 25 MB',
  })
);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Define Routes
app.use('/rest', require('./routes/rest'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/images', express.static(__dirname + '/uploads/images/'));

  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
