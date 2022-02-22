const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const gatsyExpress = require('gatsby-plugin-express');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());


// Serve static assets in production
app.use(express.static('public/'));
app.use(gatsyExpress('config/gatsby-express.json', {
  publicDir: 'public/',
  template: 'public/404/index.html',

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));