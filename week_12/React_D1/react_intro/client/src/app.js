var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./components/Counter.jsx')

window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
    // <Counter title='Jack the Counter'></Counter>,
    <Counter title='Jill the Counter'></Counter>,
    //  Simple tag with title only.  
    <Counter title='Jill the Counter' multiple={5}></Counter>,
    //  Now we've included a property of 5.  
    document.getElementById('app')
    );

};
