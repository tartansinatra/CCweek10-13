var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playlist-manager');

var Playlist = require('./models/playlist');

var playlist = new Playlist({
  name: "Hip Hop",
  genre: "Urban",
  rating: 9
})

playlist.save(function(err){
  if(err) console.log(err);
  console.log('New playlist created');
})