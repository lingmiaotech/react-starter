"use strict";
var request = require('../utils/request').request;

var envText = (process.env.NODE_ENV == 'production') ? '' : '(开发环境)';

function NotFoundController(req, res) {
  return res.render('404', {envText: envText});
}

function DefaultController(req, res) {
  return res.render('index', {envText: envText});
}

function setUpPages(app) {

  app.set('view engine', 'ejs');
  app.set('views', process.cwd() + '/server/views');

  app.get('/404', NotFoundController);
  app.get('/*', DefaultController);

}

module.exports = setUpPages;
