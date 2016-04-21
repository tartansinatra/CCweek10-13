var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');

var CountriesBox = React.createClass({

  getInitialState:function(){
    return { countries:[], currentCountry:null}
  },

  setCurrentCountry:function(country){
    this.setState({currentCountry: country});
  },

  componentDidMount:function(){
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( { countries: data, currentCountry:data[0] } )
    }.bind(this)
    request.send(null);
  },


  render: function(){
    return(
      <div>
        <h4> Countries Box </h4>
        <CountriesSelect onSelectCountry={this.setCurrentCountry} countries={this.state.countries}></CountriesSelect>
        <CountryDisplay country={this.state.currentCountry}></CountryDisplay>
      </div>
    )
  }
})

module.exports = CountriesBox;