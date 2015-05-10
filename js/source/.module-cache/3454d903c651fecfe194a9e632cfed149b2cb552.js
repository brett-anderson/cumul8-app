var React = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement(InputContainer, {placeholder: "email:"}), 
          React.createElement(InputContainer, {placeholder: "time:"}), 
          React.createElement(InputContainer, {textarea: true, placeholder: "message (optional):"}), 
          React.createElement("p", null, "What type of work is this for?"), 
          React.createElement("div", {className: "btn-group-vertical text-left"}, 
            React.createElement("button", {className: "btn btn-primary"}, "Time working on visual effects for movie"), 
            React.createElement("button", {className: "btn btn-primary"}, "Time spent reviewing the work of a junior artist")
          ), 
          React.createElement("div", {className: "form-actions clearfix"}, 
            React.createElement("button", {className: "btn btn-primary pull-left"}, "Clear Form"), 
            React.createElement("button", {className: "btn btn-primary pull-right"}, "Clear Form")
          )
        )
      )
    )
  }
})

module.exports = Add;