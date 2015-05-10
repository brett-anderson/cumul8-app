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

  getEmail: function() {
    return _fields.email;
  },

  getTime: function() {
    return _fields.time;
  },

  getMessage: function() {
    return _fields.message;
  }

});

TimesheetStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type){
    case "SET_FIELDS":
      _fields = action.fields;
      TimesheetStore.emitChange();
      break;
    case "SET_EMAIL":
      _fields.email = action.email;
      TimesheetStore.emitChange();
    case "SET_TIME":
      _fields.time = action.time;
      TimesheetStore.emitChange();
    case "SET_MESSAGE":
      _fields.message = action.message;
      TimesheetStore.emitChange();
    default:
      // Do nothing
  }

});

module.exports = TimesheetStore;