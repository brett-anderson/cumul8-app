var React            = require('react'),
    Navigation       = require('react-router').Navigation,
    TimesheetActions = require('../actions/TimesheetActions'),
    InputGroup       = require('./InputGroup'),
    Link             = require('react-router').Link;

var Add = React.createClass({displayName: "Add",

  mixins: [Navigation],

  getInitialState: function() {
    return {
      email: '',
      time: '',
      message: '',
      type: '',
      emailPlaceholder: 'email:',
      timePlaceholder: 'time:',
      timeValid: false,
      emailValid: false,
      loading: false
    }
  },

  handleTypeClick: function(e) {
    e.preventDefault();
    this.setState({type: e.target.value});
  },

  handlefocus: function(e) {
    var inputType = e.target.name;

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
      type: '',
      emailValid: false,
      timeValid: false
    })
  },

  validateForm: function(e) {
    var that = this;
    e.preventDefault();
    this.setState({loading: true});
    setTimeout(function(){
      TimesheetActions.setFields(that.state);
      that.transitionTo('valid');
    }, 1000);
  // }
  },

  render: function() {
    var type      = this.state.type,
        email     = this.state.email,
        time      = this.state.time,
        message   = this.state.message,
        CheckIcon = React.createElement("i", {style: {marginTop: '3px'}, className: "fa fa-check pull-right"}),
        timeStyle = {},
        emailStyle = {},
        emailIcon, 
        loading,
        timeIcon;

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

    loading = React.createElement("div", {className: "text-center loading"}, 
                React.createElement("i", {className: "fa fa-spinner fa-pulse fa-5x"})
              )

    console.log(this.state.loading);

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("form", {className: "col-md-4 col-centered box"}, 
          this.state.loading ? loading : '', 
          React.createElement(InputGroup, {
            name: "email", 
            placeHolder: "email: ", 
            value: this.state.email}), 

          

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
            React.createElement("button", {className: "btn btn-primary pull-right", onClick: this.validateForm, disabled: !this.state.emailValid || !this.state.timeValid || this.state.type == false}, "Submit")
          )
        )
      )
    )
  }
})

module.exports = Add;