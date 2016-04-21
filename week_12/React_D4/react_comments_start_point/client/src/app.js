var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <CommentBox url="http://localhost:5050/comments" />,
    document.getElementById('app')
  );
}
