var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var http = require('http')

// APPLICATION SETTINGS
app.set('views', './views');  // Means 'set my views to be in the view folder'.
app.set('view engine', 'ejs'); // Means set my view engine to be EJS.

// MIDDLEWARE SETTINGS
app.use(expressLayouts);
app.use(express.static('public'));

// ROUTES BEING CREATED...

app.get('/books', function(req, res){
  res.render('books');
});

app.get('/books/:isbn', function(request, response) {


// DEFINING THE EXTERNAL SOURCE TO ACCESS (API)
  http.get('http://openlibrary.org/api/books?bibkeys=ISBN:'+request.params.isbn + '&jscmd=data&format=json', function(res) {
    var body = '';
    res.on('data', function(d){
      body += d;
    });

    res.on('end', function(){
      var book = JSON.parse(body)
      response.send(book['ISBN:' + request.params.isbn]);  // accessing an object using the key: value pair.  We pass it the ISBN key +isbn value needed to retrieve the data.
    })
  });

})





app.listen('1337', function(){
  console.log('Serving on port 1337');
})

