var React = require('react');
var CountriesSelect = React.createClass({

  getInitialState: function(){
    return { selectedIndex: null };
  },

  handleChange:function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({selectedIndex: newIndex});
    var currentCountry = this.props.countries[newIndex];
    this.props.onSelectCountry( currentCountry );
  },

  render: function(){

    var options = this.props.countries.map(function(country, index){
      return <option value={index} key={index}> { country.name } </option>
    })

    return(
      <div>
        <select value={this.state.selectedIndex} onChange={this.handleChange} >
          { options }
        </select>
      </div>
    )
  }
});

module.exports = CountriesSelect;