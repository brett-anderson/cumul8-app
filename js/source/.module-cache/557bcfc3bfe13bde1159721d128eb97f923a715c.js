var React = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  render: function() {
    return (

      React.createElement("div", null, 
      React.createElement(InputContainer, {inputName: "add"})
      )
    )
  }
})

module.exports = Add;