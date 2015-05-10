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
  }
}

module.exports = TimesheetActions;