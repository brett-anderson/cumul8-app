var React          = require('react'),
    InputContainer = require('./InputContainer'),
    CheckIcon      = require('./CheckIcon');

var Add = React.createClass({displayName: "Add",
  getInitialState: function() {
    return {
      email: null,
      time: null,
      message: null,
      type: 0
    }
  },

  handleClick: function(e) {
    var target = e.target;
    switch(target){
      case 'Time working on visual effects for movie':
        this.setState({type: 1});
        break;
      case 'Time spent reviewing the work of a junior artist':
        this.setState({type: 2});
        break;
      default:
        statements_def
        break;
    }
  },

  render: function() {
    var type = this.state.type;
    
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement(InputContainer, {placeholder: "email:"}), 
          React.createElement(InputContainer, {placeholder: "time:"}), 
          React.createElement(InputContainer, {textarea: true, placeholder: "message (optional):"}), 
          React.createElement("p", null, "What type of work is this for?"), 
          React.createElement("div", {className: "btn-group-vertical text-left clearfix"}, 
            React.createElement("button", {className: "btn btn-primary", onClick: this.handleClick}, "Time working on visual effects for movie", (type == 1) ? CheckIcon : ''), 
            React.createElement("button", {className: "btn btn-primary", onClick: this.handleClick}, "Time spent reviewing the work of a junior artist", (type == 2) ? CheckIcon  : '')
          ), 
          React.createElement("div", {className: "form-actions clearfix"}, 
            React.createElement("button", {className: "btn btn-primary pull-left"}, "Clear Form "), 
            React.createElement("button", {className: "btn btn-primary pull-right"}, "Submit")
          )
        )
      )
    )
  }
})

module.exports = Add;