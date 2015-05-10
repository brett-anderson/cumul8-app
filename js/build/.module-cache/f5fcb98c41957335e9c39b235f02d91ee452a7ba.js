var React = require('react'),
    Link  = require('react-router').Link;

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

  handleTypeClick: function(e) {
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

  handleSubmit: function(e) {
    e.preventDefault();
    
  },

  clearForm: function(e) {
    e.preventDefault();
    this.setState({
      email: '',
      time: '',
      message: '',
      type: '',
      emailValid: false,
      timeValid: false
    })
  },

  render: function() {
    var type      = this.state.type,
        email     = this.state.email,
        time      = this.state.time,
        message   = this.state.message,
        CheckIcon = React.createElement("i", {style: {marginTop: '3px'}, className: "fa fa-check pull-right"}),
        emailIcon, 
        timeIcon,
        timeStyle = {},
        emailStyle = {};

    if(this.state.emailValid) {
      emailIcon = 'fa fa-check';
      emailStyle.background = '#66BB6A';
    } else if(this.state.email.length > 0) {
      emailIcon = 'fa fa-spinner fa-pulse';
      emailStyle.background = '#FFCA28';
    } else {
      emailIcon = 'fa fa-envelope';
    }

    if(this.state.timeValid) {
      timeIcon = 'fa fa-check';
      timeStyle.background = '#66BB6A';
    } else if(this.state.time.length > 0) {
      timeIcon = 'fa fa-spinner fa-pulse';
      timeStyle.background = '#FFCA28';
    } else {
      timeIcon = 'fa fa-clock-o'
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
              React.createElement("span", {style: emailStyle, className: "input-group-addon"}, React.createElement("i", {className: emailIcon}))
            ), 

          React.createElement("div", {className: "input-group"}, 
            React.createElement("input", {
              type: "text", 
              name: "time", 
              className: "form-control", 
              placeholder: "time:", 
              onFocus: this.handleFocus, 
              onBlur: this.handleBlur, 
              value: time, 
              onChange: this.handleChange}), 
              React.createElement("span", {style: timeStyle, className: "input-group-addon"}, React.createElement("i", {className: timeIcon}))
          ), 
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
              className: "btn btn-primary", value: "working", onClick: this.handleTypeClick}, "Time working on visual effects for movie", (type == 'working') ? CheckIcon : ''), 
            React.createElement("button", {className: "btn btn-primary", value: "reviewing", onClick: this.handleTypeClick}, "Time spent reviewing the work of a junior artist", (type == 'reviewing') ? CheckIcon : '')
          ), 
          React.createElement("div", {className: "form-actions clearfix"}, 
            React.createElement("button", {className: "btn btn-primary pull-left", onClick: this.clearForm}, "Clear Form "), 
            React.createElement(Link, {className: "btn btn-primary pull-right", disabled: !this.state.emailValid || !this.state.timeValid || this.state.type == false, to: "success", params: this.state}, "Submit")
          )
        )
      )
    )
  }
})

module.exports = Add;