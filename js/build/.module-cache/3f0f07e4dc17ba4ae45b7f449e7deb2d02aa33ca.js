var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  getInitialState: function() {
    return {
      placeholder: this.props.placeholder
    }
  },
  handleFocus: function() {
    this.setState({placeholder: ''});
  },
  
  handleBlur: function() {
    this.setState({placeholder: this.props.placeholder});
  }, 

  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", placeholder: this.state.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur})
      )
    )
  }
})

module.exports = InputContainer;