var React = require('react');

var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var author = this.state.author.trim();  // removes any white space
    var text = this.state.text.trim(); // removes any white space
    this.setState({author:author, text:text});  // resets the existing data to browser
    this.props.onCommentSubmit({author:author, text:text}); // takes in new comments

    // // ALTERNATIVELY... IF YOU ARE NOT BOTHERED ABOUT THE WHITE SPACE.
    // this.props.onCommentSubmit({this.state});
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        type='text' placeholder='Your name'
        value= {this.state.author}
        onChange = {this.handleAuthorChange}/>
        
        <input 
        type='text' placeholder='Say something...'
        value= {this.state.text}
        onChange = {this.handleTextChange}/>

        <input type="submit" value='Enter post'/>
      </form>
      )
  }
})

module.exports = CommentForm;