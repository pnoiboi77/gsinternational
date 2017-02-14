var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 3000;
var mUrl =
  'mongodb://localhost:27017/gsinternational';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'gsInternational'}));

require('./src/config/passport')(app, mUrl);

app.set('views', './src/views');
app.set('view engine', 'ejs');

/* -- router middleware -- */


/* -- end router middleware -- */

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});
