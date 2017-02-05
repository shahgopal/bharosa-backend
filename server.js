// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const bodyParser= require('body-parser')
// const app = express();













// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


require('./app/paytm_routes/testtxn')(app)
require('./app/paytm_routes/pgredirect')(app);
require('./app/paytm_routes/response')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views/paytm');
app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}))

// MongoClient.connect('mongodb://localhost/bharosa-backend', function(err, database) {
//   if(err) {
//   	throw new Error(err);
//   }

  
// });

// app.listen(3000, function() {
//   console.log('listening on 3000')
// })

// app.get('/', function(req, res) {
//   res.send('Hello World')
// })
// app.post('/quotes', function(req, res) {
//   console.log(req.body)
// })

