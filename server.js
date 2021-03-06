var express = require('express');
var open = require('open');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('./'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
  console.log('Launching browser...');
  open('http://localhost:' + PORT);
});
