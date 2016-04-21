var solarSystem  = function(name, planets){
  this.name = name;
  this.planets = [];
  this.addPlanet = function(planet){
    this.planets.push(planet); 
  }
  this.listPlanets = function(){
    console.log(this.planets);
  }
}



module.exports = solarSystem;