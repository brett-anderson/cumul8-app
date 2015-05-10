var React            = require('react'),
    Navigation       = require('react-router').Navigation,
    TimesheetActions = require('../actions/TimesheetActions'),
    Link             = require('react-router').Link;

var AddTime = React.createClass({

  mixins: [Navigation],

  getInitialState: function() {
    return {
      email: '',
      time: '',
      message: '',
      type: '',
      timeValid: false,
      emailValid: false,
      loading: false,
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

  handleFocus: function(e) {
    e.target.placeholder = '';
  },

  handleBlur: function(e) {
    switch(e.target.name){
      case 'email':
        e.target.placeholder = 'email: ';
        break;
      case 'time':
        e.target.placeholder = 'time: e.g. 1 hour 15 minutes' ;
        break;
      case 'message':
        e.target.placeholder = "message (optional):"
        break;
    }
  },

  validateEmail: function(email) {
    // Uses regex to validate email
    var re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ca|com|me|co|io|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;

    if (re.test(email)) {
      this.setState({"emailValid": true});
    } else {
      this.setState({'emailValid': false});
    }
  },

  validateTime: function(time) {
    // Uses regex to validate format of time
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
      timeValid: false,
      createdAt: new Date()
    })
  },

  validateForm: function(e) {
    var that = this;
    e.preventDefault();
    this.setState({loading: true});
    setTimeout(function(){
      TimesheetActions.setFields(that.state);
      TimesheetActions.addRecord(that.state);
      that.transitionTo('valid');
    }, 1000);
  // }
  },

  render: function() {
    var type      = this.state.type,
        email     = this.state.email,
        time      = this.state.time,
        message   = this.state.message,
        CheckIcon = <i style={{marginTop: '3px'}} className="fa fa-check pull-right"></i>,
        timeStyle = {},
        emailStyle = {},
        emailIcon, 
        loading,
        timeIcon;

    // Validation logic for displaying email icon
    if(this.state.emailValid) {
      emailIcon = 'fa fa-check';
      emailStyle.background = '#66BB6A';
    } else if(this.state.email.length > 0) {
      emailIcon = 'fa fa-spinner fa-pulse';
      emailStyle.background = '#FFCA28';
    } else {
      emailIcon = 'fa fa-envelope';
    }

    // Validation logic for displaying time icon
    if(this.state.timeValid) {
      timeIcon = 'fa fa-check';
      timeStyle.background = '#66BB6A';
    } else if(this.state.time.length > 0) {
      timeIcon = 'fa fa-spinner fa-pulse';
      timeStyle.background = '#FFCA28';
    } else {
      timeIcon = 'fa fa-clock-o'
    }

    loading = <div className="text-center loading">
                <i className="fa fa-spinner fa-pulse fa-5x" />
              </div>

    return (
      <div className="row">
        <form className="col-md-4 col-centered box">
          {this.state.loading ? loading : ''}
          <h2>Add Time</h2>
          <div className="input-group">
            <input 
              name="email" 
              className='form-control' 
              placeholder='email:' 
              onFocus={this.handleFocus} 
              onBlur={this.handleBlur} 
              value={email} 
              onChange={this.handleChange}/>
              <span style={emailStyle} className="input-group-addon"><i className={emailIcon}/></span>
            </div>

          <div className="input-group">
            <input 
              type='text' 
              name="time" 
              className='form-control' 
              placeholder='time: e.g. 1 hour 15 minutes' 
              onFocus={this.handleFocus} 
              onBlur={this.handleBlur} 
              value={time} 
              onChange={this.handleChange}/>
              <span style={timeStyle} className="input-group-addon"><i className={timeIcon}/></span>
          </div>
          <textarea 
            name="message" 
            className='form-control' 
            placeholder='message (optional):' 
            onFocus={this.handleFocus} 
            onBlur={this.handleBlur} 
            value={message} 
            onChange={this.handleChange}/>
          <p>What type of work is this for?</p>
          <div className="btn-group-vertical text-left clearfix">
            <button 
              className="btn btn-primary" value="working" onClick={this.handleTypeClick}>Time working on visual effects for movie{(type == 'working') ? CheckIcon : ''}</button>
            <button className="btn btn-primary" value="reviewing" onClick={this.handleTypeClick}>Time spent reviewing the work of a junior artist{(type == 'reviewing') ? CheckIcon : ''}</button>
          </div>
          <div className="form-actions clearfix">
            <button className="btn btn-primary pull-left" onClick={this.clearForm}>Clear Form </button>
            <button className="btn btn-primary pull-right" onClick={this.validateForm} disabled={!this.state.emailValid || !this.state.timeValid || this.state.type == false}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = AddTime;