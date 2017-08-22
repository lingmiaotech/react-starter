
var express = require('express');
var compression = require('compression');
var robots = require('express-robots');

function setUpStaticsHandler(app) {
  app.use(compression());
  app.use(robots('robots.txt'));
  app.use('/static', express.static('production/static'));
}


function setUpDevelopmentMiddleware(app) {
  var config = require('../../configs/webpack.dev.js');
  var compiler = require('webpack')(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

module.exports = (process.env.NODE_ENV == 'production') ? setUpStaticsHandler : setUpDevelopmentMiddleware;
