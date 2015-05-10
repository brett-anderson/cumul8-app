var React          = require('react');

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

  handleChange: function(e) {
    var e = e;
    console.log(e);
    // switch(e.target.ref){
    //   case label_1:
    //     statements_1
    //     break;
    //   default:
    //     statements_def
    //     break;
    // }

    this.setState({email: e.target.value})
  },

  clearForm: function() {
    this.setState({
      email: null,
      time: null,
      message: null,
      type: null    
    })
  },

  render: function() {
    var type = this.state.type;
    var CheckIcon = React.createElement("i", {className: "glyphicon glyphicon-ok pull-right"});

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement("input", {type: "email", className: "form-control", placeholder: "email:", onFocus: this.handleFocus, onBlur: this.handleBlur, value: this.state.value, onChange: this.handleChange}), 
          React.createElement("input", {type: "text", className: "form-control", placeholder: "time:", onFocus: this.handleFocus, onBlur: this.handleBlur, value: this.state.value, onChange: this.handleChange}), 
          React.createElement("textarea", {className: "form-control", placeholder: "message (optional):", onFocus: this.handleFocus, onBlur: this.handleBlur, defaultValue: this.state.value}), 
          React.createElement("p", null, "What type of work is this for?"), 
          React.createElement("div", {className: "btn-group-vertical text-left clearfix"}, 
            React.createElement("button", {className: "btn btn-primary", value: "working", onClick: this.handleClick}, "Time working on visual effects for movie", (type == 'working') ? CheckIcon : ''), 
            React.createElement("button", {className: "btn btn-primary", value: "reviewing", onClick: this.handleClick}, "Time spent reviewing the work of a junior artist", (type == 'reviewing') ? CheckIcon : '')
          ), 
          React.createElement("div", {className: "form-actions clearfix"}, 
            React.createElement("button", {className: "btn btn-primary pull-left", onClick: this.clearForm}, "Clear Form "), 
            React.createElement("button", {className: "btn btn-primary pull-right"}, "Submit")
          )
        )
      )
    )
  }
})

module.exports = Add;