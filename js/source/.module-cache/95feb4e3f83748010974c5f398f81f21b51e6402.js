var React          = require('react');

var Add = React.createClass({displayName: "Add",
  getInitialState: function() {
    return {
      email: '',
      time: '',
      message: '',
      type: '',
      timeValid: false,
      emailValid: false
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
        this.validateEmail(value);
        this.setState({'email': value});
        break;
      case 'time':
        this.validateTime(value);
        this.setState({"time": value});
        break;
      case 'message':
        this.setState({'message': value});
        break;
    }
  },
  validateEmail: function(email) {
    var re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|co|io|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;

    if (re.test(email)) {
      this.setState({"emailValid": true});
    } else {
      this.setState({'emailValid': false});
    }
  },

  validateTime: function(time) {
    var hours    = /^((\d*) (hours?))$/,
        minutes  = /^((\d*) (minutes?))$/,
        hoursMinutes = /^((\d*) (hours?)) ((\d*) (minutes?))$/

    if (time.match(hoursMinutes)) {
      this.setState({"timeValid": true});
    } else if(time.match(minutes)) {
      this.setState({"timeValid": true});
    } else if (time.match(hours) ) {
      this.setState({"timeValid": true});
    } else {
      this.setState({'timeValid': false});
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
        CheckIcon = React.createElement("i", {className: "fa fa-ok pull-right"});

    var emailIcon;

    if(this.state.emailValid) {
      emailIcon = 'fa fa-ok';
    } else if(this.state.email.length > 0) {
      emailIcon = 'fa fa-spinner fa-pulse';
    } else {
      emailIcon = 'fa fa-email';
    }

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          React.createElement("div", {className: "input-group"}, 
            React.createElement("input", {
              name: "email", 
              className: "form-control", 
              placeholder: "email:", 
              onFocus: this.handleFocus, 
              onBlur: this.handleBlur, 
              value: email, 
              onChange: this.handleChange}), 
              React.createElement("span", {className: "input-group-addon"}, !this.state.emailValid ? "x" : 'sweet!')
            ), 

          React.createElement("input", {
            type: "text", 
            name: "time", 
            className: "form-control", 
            placeholder: "time:", 
            onFocus: this.handleFocus, 
            onBlur: this.handleBlur, 
            value: time, 
            onChange: this.handleChange}), 
          React.createElement("p", null, !this.state.timeValid ? "Please enter a valid time. e.g. x hours and/or x minutes" : ''), 
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
            React.createElement("button", {className: "btn btn-primary pull-right", disabled: !this.state.emailValid || !this.state.timeValid}, "Submit")
          )
        )
      )
    )
  }
})

module.exports = Add;