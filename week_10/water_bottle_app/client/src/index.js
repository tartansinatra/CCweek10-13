var waterBottle = require('./water_bottle/water_bottle.js');

var displayVolume = function(){
  var volumeDisplay = document.getElementById('volume');
  volumeDisplay.innerText = waterBottle.volume
}

var fillBottle = function(){
  var refillButton = document.getElementById('refill');
  refillButton.onclick = function(){
    waterBottle.fill();
    displayVolume();
  }
}

var drinkBottle = function(){
  var drinkButton = document.getElementById('drink');
  drinkButton.onclick = function(){
    waterBottle.drink();
    displayVolume();
  }
}

var gulpBottle = function(){
  var gulpButton = document.getElementById('gulp');
  gulpButton.onclick = function(){
    waterBottle.gulp();
    displayVolume();
  }
}



window.onload = function(){
  console.log('App started volume of Evian bottle', waterBottle.volume);

  displayVolume();
  fillBottle();
  drinkBottle();
  gulpBottle();
}