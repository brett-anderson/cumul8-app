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
    var Input;

    if(this.props.textarea) {
      Input = React.createElement("textarea", {className: "form-control", placeholder: this.state.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur})
    } else {
      Input = React.createElement("input", {className: "form-control", placeholder: this.state.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur})
    }
    return (
      React.createElement("div", {className: "form-group"}, 
        Input
      )
    )
  }
})

module.exports = InputContainer;