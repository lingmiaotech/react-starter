var favicon = require('serve-favicon');

function setUpFavicon(app) {
  app.use(favicon(process.cwd() + '/favicon.ico'));
}

module.exports = setUpFavicon;
