var React          = require('react'),
    InputContainer = require('./InputContainer');

var Add = React.createClass({displayName: "Add",
  getInitialState: function() {
    return {
      email: null,
      time: null,
      message: null,
      type: null
    }
  },

  handleClick: function(e) {
    this.setState({type: e.target.value});
  },

  render: function() {
    var type = this.state.type;
    var CheckIcon = React.createElement("i", {className: "glyphicon glyphicon-ok pull-right"});

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement(InputContainer, {placeholder: "email:", type: "email"}), 
          React.createElement(InputContainer, {placeholder: "time:"}), 
          React.createElement(InputContainer, {textarea: true, placeholder: "message (optional):"}), 
          React.createElement("p", null, "What type of work is this for?"), 
          React.createElement("div", {className: "btn-group-vertical text-left clearfix"}, 
            React.createElement("button", {className: "btn btn-primary", value: "working", onClick: this.handleClick}, "Time working on visual effects for movie", (type == 'working') ? CheckIcon : ''), 
            React.createElement("button", {className: "btn btn-primary", value: "reviewing", onClick: this.handleClick}, "Time spent reviewing the work of a junior artist", (type == 'reviewing') ? CheckIcon : '')
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