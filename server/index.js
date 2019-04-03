const express = require('express');

const app = express();
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const config = require('config');
const contentful = require('contentful');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const enforce = require('express-sslify');

const configIndexPath = config.get('indexPath');
const apiRoutes = require('./routes');


// enable ssl redirect
if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

const port = process.env.PORT || 8000;
if (port == null || port === '') {
  port = 8000;
}

const contentfulPromise = (spaceID, accessToken) => new Promise((resolve, reject) => {
  resolve(contentful.createClient({
    space: spaceID,
    accessToken
  }));
});


// enable cors
app.use(
  cors({
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const spaceID = process.env.SPACE_ID;
  const accessToken = process.env.ACCESS_TOKEN;
  req.contentful = contentfulPromise(spaceID, accessToken);
  next();
});

// Initial GZIP reading middlewear
app.use(
  '/',
  expressStaticGzip(path.join(__dirname, '../public'), {
    indexFromEmptyFile: false
  })
);

// Add this back in when we have added GZIP support
app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.get('*.css', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});
// allow Content-Type to be specified
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  next();
});

// API
app.use('/api', apiRoutes);

// Serve static assets
app.use(express.static('public'));

// Return the HTML file for all requests
app.use((req, res) => {
  res.sendFile(path.join(configIndexPath));
});

app.listen(port, () => {
  console.log('Index path is: ' + configIndexPath);
  console.log('App is running on port ' + port);
});
