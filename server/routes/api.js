"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


function bindHandler(req, res, next) {

  res.json({error: 'not_implemented'})

}

function setUpApiHandler(app) {

  app.use(bodyParser.json());
  app.use(cookieParser());

  var apiRouter = express.Router();
  apiRouter.all('/bind', bindHandler);
  app.use('/api', apiRouter);

}


module.exports = setUpApiHandler;
