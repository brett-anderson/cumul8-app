var React = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-12"}, 
          React.createElement(InputContainer, {labelName: "add"})
        )
      )
    )
  }
})

module.exports = Add;