var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", placeholder: this.props.label})
      )
    )
  }
})

module.exports = InputContainer;