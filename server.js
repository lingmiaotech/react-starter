var express = require('express');


var app = express();

require('./server/routes')(app);

app.listen(32021, '0.0.0.0', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:32020');
});
