var React = require('react');

var CountryDisplay = React.createClass({
  render: function(){
    if(!this.props.country){ return <h4> No Country Selected </h4> }
    return(
      <div>
        <h4> { this.props.country.name } </h4>
      </div>
    )
  }
})

module.exports = CountryDisplay;