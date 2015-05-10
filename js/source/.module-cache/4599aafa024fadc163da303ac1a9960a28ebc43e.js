var Dispatcher = require('../dispatcher');

var TimesheetActions = {
  setFields: function(fields) {
    Dispatcher.dispatch({
      type: "SET_FIELDS",
      fields: fields
    });
  },
  
  setEmail: function(email) {
    Dispatcher.dispatch({
      type: "SET_EMAIL",
      email: email
    })
  },

  setTime: function(time) {
    Dispatcher.dispatch({
      type: "SET_Time",
      time: time
    })
  },

  setMessage: function(message) {
    Dispatcher.dispatch({
      type: "SET_MESSAGE",
      message: message
    });
  }
}

module.exports = TimesheetActions;