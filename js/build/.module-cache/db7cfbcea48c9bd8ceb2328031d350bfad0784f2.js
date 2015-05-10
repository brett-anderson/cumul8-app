var React = require("react");

var InputGroup = React.createClass({displayName: "InputGroup",

  getInitialState: function() {
    return {
      value: '',
      
    }
  },

  render: function() {

    var emailStyle, emailIcon;

    return (
      React.createElement("div", {className: "input-group"}, 
            React.createElement("input", {
              name: this.props.name, 
              className: "form-control", 
              placeholder: this.props.placeholder, 
              onFocus: this.handleFocus, 
              onBlur: this.handleBlur, 
              value: this.state.value, 
              onChange: this.handleChange}), 
              React.createElement("span", {style: emailStyle, className: "input-group-addon"}, React.createElement("i", {className: emailIcon}))
            )
    )
  }

})

module.exports = InputGroup;