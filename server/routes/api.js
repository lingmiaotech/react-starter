"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var request = require('../utils/request').request;
var humps = require('humps');

var arenaUrl = (process.env.NODE_ENV == 'production') ? 'http://127.0.0.1:40018' : 'http://127.0.0.1:30018';


function bindHandler(req, res, next) {

  res.json({error: 'not_implemented'})

}

//function apiHandler(req, res, next) {
//
//  var path = req.params[0];
//
//  if (path == 'users/sign_up' || path == 'users/sign_in' || path == 'users/authenticate') {
//    var options = {
//      url: arenaUrl + '/' + path,
//      method: req.method,
//      params: req.query || {},
//      body: req.body || {}
//    };
//
//    return request(options).then(function(result) {
//      res.json(result);
//    });
//
//  }
//
//}

function setUpApiHandler(app) {

  app.use(bodyParser.json());
  app.use(cookieParser());

  var apiRouter = express.Router();
  apiRouter.all('/bind', bindHandler);
  app.use('/api', apiRouter);

}


module.exports = setUpApiHandler;
