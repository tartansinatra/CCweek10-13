var express = require('express');
var planetRouter = express.Router();
var solarSystem = require('./../models/solar_system');
var bodyParser = require('body-parser');
planetRouter.use(bodyParser.urlencoded( { extended: false} ));

planetRouter.get('/', function(req, res){
  // INDEX
  res.render('planets/index', {solarSystem: solarSystem})
});

planetRouter.get('/new', function(req, res) {
  // NEW
  res.render("planets/new");
});

planetRouter.post('/', function(req, res) {
  // CREATE
  var newPlanet = {};
  newPlanet.name = req.body.name
  newPlanet.size = parseInt(req.body.size);
  solarSystem.planets.push(newPlanet);
  res.redirect('/');
});

planetRouter.get('/:id', function(req, res){
  // SHOW
  res.render('planets/show', {planet: solarSystem.planets[req.params.id-1]});
});

planetRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.render("planets/edit", {planet: solarSystem.planets[req.params.id-1], planetId:req.params.id-1});   // so render the form, pass the complete array & edit specific ID.
});


planetRouter.post('/:id', function(req, res) {
  // UPDATE - find the planet, adjust variables and redirect to index
  var planet = solarSystem.planets[req.params.id];
  planet.name = req.body.name
  planet.size = parseInt(req.body.size);
  res.redirect('/');
});

planetRouter.post('/:id/delete', function(req, res) {
  // DELETE
  solarSystem.planets.splice(req.params.id-1, 1);
  res.redirect('/planets');
});

module.exports = planetRouter