var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

/* GET home page. */

app.get('/', function(req, res) {
  res.send('<h1>Welcome to ExpressJS!</h1>');
});


/* GET hello route. */
app.get('/hello', function(req, res) {
  res.render('index', {title: 'Welcome', message: 'Hello ExpressJS!'});
});


app.listen(3000);
console.log('Running Express...');

