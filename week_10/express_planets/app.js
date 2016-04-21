var express = require('express');  // This returns a function
var app = express();  // Above function stored as a var, being invoked.

var solarSystem = require('./models/solar_system.js');
var expressLayouts = require('express-ejs-layouts');
var planetRouter = require('./controllers/planetRouter');



// APPLICATION SETTINGS
app.set('views', './views'); //  Define that the views are in the Views folder.
app.set('view engine', 'ejs');


// MIDDLEWARE
app.use(expressLayouts);
app.use('/planets', planetRouter);
app.use(express.static(__dirname +'/public'));


app.get('/', function(req, res){   // request & response arguments
  res.render('index', {welcome: "Welcome to the Solar System"});
});

app.listen('3000', function(){
  console.log('Running on port 3000');
});




