var React = require('react');

InputContainer = React.createClass({displayName: "InputContainer",
  getInitialState: function() {
    return {
      placeholder: this.props.placeholder,
      value: this.props.value
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
      Input = React.createElement("textarea", {className: "form-control", placeholder: this.state.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur, defaultValue: this.state.value})
    } else {
      Input = React.createElement("input", {type: this.props.type, className: "form-control", placeholder: this.state.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur, defaultValue: this.state.value})
    }
    return (
      React.createElement("div", {className: "form-group"}, 
        Input
      )
    )
  }
})

module.exports = InputContainer;