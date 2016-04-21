var planet = require('./planet').planet;
var rn = require('./planet').randomNum;
var SolarSystem = require('./solarSystem');


var mercury = Object.create(planet);
mercury.name = 'Mercury';
mercury.radius = 20;

console.log('First Planet object is: ' +mercury.getName());
console.log(mercury);

// var newSystem = Object.create(solarSystem);
var solarSystem = new SolarSystem('Sol');

solarSystem.addPlanet(mercury);

solarSystem.listPlanets();