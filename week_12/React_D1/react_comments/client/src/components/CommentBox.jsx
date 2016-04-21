var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');


// Data Stub 
var sampleData = [
  {id:1, author: "Jay", text:'cool cool cool'},
  {id:2, author: "Keith", text:'I stole Rick'}
];


var CommentBox = React.createClass({
  
  getInitialState:function(){
    return {data: sampleData};
  },

  handleCommentSubmit: function(comment){
    comment.id = Date.now();
    var newComments = this.state.data.concat([comment]);
    this.setState( {data: newComments} );
  },

  handleCommentDelete: function(id){
    var filteredData = this.state.data.filter(function(comment){
      return comment.id != id
    })
    this.setState({data: filteredData});
  },

  render: function(){
    return(
      <div>
        <h1> Comments </h1>
        <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete}></CommentList>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>
        
      </div>
        // It's state is getting data passed as a property to CommList.
    )
  }
});

module.exports = CommentBox;