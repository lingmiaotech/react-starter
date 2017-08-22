
var fetch = require('isomorphic-fetch');
var _ = require('lodash');

function request(options) {

  var o = _.extend({url: '', method: 'GET', headers: {}, params: {}, json: {}}, (options || {}));
  var u = o.url;
  var m = o.method;
  var h = o.headers;
  var p = o.params;
  var j = o.json;

  var qs = _.map(p, (value, key) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&');
  if (qs) u = u + '?' + qs;

  var opts = { method: m, headers: h};
  if (m == 'POST') opts['body'] = JSON.stringify(j);

  return fetch(u, opts)
    .then(response => response.text())
    .then(text => {
      try {var json = JSON.parse(text);}
      catch(e) {throw {code: -1, error: 'connection_failed'} }
      return json;
    })
    .catch(error => error);

}

module.exports = {
  request: request
};
