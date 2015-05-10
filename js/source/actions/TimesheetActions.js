var Dispatcher = require('../dispatcher');

var TimesheetActions = {
  setFields: function(fields) {
    Dispatcher.dispatch({
      type: "SET_FIELDS",
      fields: fields
    });
  },  

  addRecord: function(record) {
    Dispatcher.dispatch({
      type: "ADD_RECORD",
      record: record
    })
  }
}

module.exports = TimesheetActions;