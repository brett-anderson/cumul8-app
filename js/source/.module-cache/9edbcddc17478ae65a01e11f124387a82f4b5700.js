var Dispatcher   = require("../dispatcher");
var EventEmitter = require("events").EventEmitter;
var assign       = require("object-assign");

var CHANGE_EVENT = 'change';
var _fields = {
  email: '',
  time: '',
  message: '',
  type: '',
  timeValid: false,
  emailValid: false,
  loading: false
};

var TimesheetStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeEventListener(CHANGE_EVENT, callback);
  },

  getFields: function() {
    return _fields;
  },

});

TimesheetStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type){
    case "SET_FIELDS":
      _fields = action.fields;
      TimesheetStore.emitChange();
      break;
    default:
      // Do nothing
  }

});

module.exports = TimesheetStore;