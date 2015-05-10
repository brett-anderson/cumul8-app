var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  render: function() {
    return (
      React.createElement("input", {className: "form-contol"})
    )
  }
})

module.exports = InputContainer;