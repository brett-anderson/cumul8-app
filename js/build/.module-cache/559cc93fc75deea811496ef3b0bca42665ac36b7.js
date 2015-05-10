var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("label", null, this.props.labelName), 
        React.createElement("input", {className: "form-control"})
      )
    )
  }
})

module.exports = InputContainer;