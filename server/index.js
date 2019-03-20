

const express = require('express');

const app = express();
const WebpackDevServer = require('webpack-dev-server');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes');

const configIndexPath = config.get('indexPath');
console.log('Index path is: ' + configIndexPath);
let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}

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

// Add this back in when we have added GZIP support
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.get('*.css', (req, res, next) => {
  req.url = req.url + '.gz';
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
const publicPath = express.static(path.join(__dirname, '../public'));

app.use(express.static('public'));

// Return the HTML file for all requests
app.use((req, res) => {
  res.sendFile(path.join(__dirname + configIndexPath));
});

app.listen(port);
