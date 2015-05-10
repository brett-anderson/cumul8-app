var React          = require('react');

var Add = React.createClass({displayName: "Add",
  getInitialState: function() {
    return {
      email: '',
      time: '',
      message: '',
      type: '',
      timeValid: false
    }
  },

  handleClick: function(e) {
    e.preventDefault();
    this.setState({type: e.target.value});
  },

  handleChange: function(e) {
    var inputType = e.target.name,
        value = e.target.value;
    switch(inputType){
      case 'email':
        this.setState({'email': value});
        break;
      case 'time':
        this.validateTime(value);
        this.setState({"time": value});
        // if(this.validateTime(value)){
        //   this.setState({'time': value, 'timeValid': true});
        // } else {
        //   this.setState({'time': value});
        // }
        // break;
        // }
      case 'message':
        this.setState({'message': value});
        break;
    }
  },
  validateTime: function(time) {
    var hours    = /((\d*) (hours?))/,
        minutes  = /((\d*) (minutes?))/,
        hoursMinutes = /((\d*) (hours?)) ((\d*) (minutes?))/

    if (time.match(hoursMinutes)) {
      console.log("true hours and minutes");
    } else if(time.match(minutes)) {
      console.log('true minutes');
    } else if (time.match(hours) ) {
      console.log('true hours');
    }

  },

  clearForm: function(e) {
    e.preventDefault();
    this.setState({
      email: '',
      time: '',
      message: '',
      type: ''    
    })
  },

  render: function() {
    var type      = this.state.type,
        email     = this.state.email,
        time      = this.state.time,
        message   = this.state.message,
        CheckIcon = React.createElement("i", {className: "glyphicon glyphicon-ok pull-right"});

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement("input", {
            type: "email", 
            name: "email", 
            className: "form-control", 
            placeholder: "email:", 
            onFocus: this.handleFocus, 
            onBlur: this.handleBlur, 
            value: email, 
            onChange: this.handleChange}), 
          React.createElement("input", {
            type: "text", 
            name: "time", 
            className: "form-control", 
            placeholder: "time:", 
            onFocus: this.handleFocus, 
            onBlur: this.handleBlur, 
            value: time, 
            onChange: this.handleChange}), 
          React.createElement("textarea", {
            name: "message", 
            className: "form-control", 
            placeholder: "message (optional):", 
            onFocus: this.handleFocus, 
            onBlur: this.handleBlur, 
            value: message, 
            onChange: this.handleChange}), 
          React.createElement("p", null, "What type of work is this for?"), 
          React.createElement("div", {className: "btn-group-vertical text-left clearfix"}, 
            React.createElement("button", {
              className: "btn btn-primary", value: "working", onClick: this.handleClick}, "Time working on visual effects for movie", (type == 'working') ? CheckIcon : ''), 
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