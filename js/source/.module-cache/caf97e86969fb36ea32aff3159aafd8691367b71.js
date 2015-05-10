var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("label", null, this.props.labelName), 
        React.createElement("input", {className: "form-contol"})
      )
    )
  }
})

module.exports = InputContainer;