var React = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered"}, 
          React.createElement(InputContainer, {placeholder: "email"}), 
          React.createElement(InputContainer, {placeholder: "time"}), 
          React.createElement("textarea", {className: "form-control"})
        )
      )
    )
  }
})

module.exports = Add;