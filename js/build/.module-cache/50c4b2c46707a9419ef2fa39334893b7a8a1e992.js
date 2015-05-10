var React = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  render: function() {
    return (
      React.createElement("div", {className: "row text-center"}, 
        React.createElement("form", {className: "col-md-4"}, 
          React.createElement(InputContainer, {labelName: "add"})
        )
      )
    )
  }
})

module.exports = Add;