var Dispatcher = require('../dispatcher');

var TimesheetActions = {
  setFields: function(fields) {
    Dispatcher.dispatch({
      type: "SET_FIELDS",
      fields: fields
    });
  }
}

module.exports = TimesheetActions;