
function setUpRoutes(app) {

  require('./favicon')(app);

  require('./statics')(app);

  require('./health')(app);

  require('./api')(app);

  require('./pages')(app);

}

module.exports = setUpRoutes;
