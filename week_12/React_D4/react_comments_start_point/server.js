var express = require('express');
var app = express();
var path = require('path');
// var fs = require('fs');
// var bodyParser = require('body-parser');

// var COMMENTS_FILE = path.join(__dirname, 'comments.json');


// //setting up MIDDLEWARE
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.get('/api/comments', function(req, res){
//   fs.readFile(COMMENTS_FILE, function(err, data){
//     if(err){
//       console.error(err);  // throw any error message to the console.
//       process.exit(1);    // This is just a process to exit the error message.
//     }
//     res.json(JSON.parse(data));  // respond with a 'parsed' JSON data file. 
//   });
// });

// app.post('/api/comments', function(req, res){
//   fs.readFile(COMMENTS_FILE, function(err, data){
//     if(err){
//       console.error(err);
//       process.exit(1);
//     }
//     var comments = JSON.parse(data);
//     var newComment = {
//       id: Date.now,
//       author: req.body.author,
//       text: req.body.text
//     }
//     comments.push(newComment);
//     fs.writeFile(COMMENTS_FILE, JSON.stringify(comments),
//      function(err){
//         if(err){
//           console.error(err);
//           process.exit(1);
//         }
//      res.json(comments);
//      })
//   });
// });


app.use(express.static('client/build'));  // where to get the bundle from inc CSS files.


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
