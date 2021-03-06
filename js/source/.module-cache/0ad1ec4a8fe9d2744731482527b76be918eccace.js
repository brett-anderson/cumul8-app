var React        = require('react'),
    Header       = require('./Header'),
    TimesheetStore = require('../stores/TimesheetStore'), 
    RouteHandler = require('react-router').RouteHandler;

TimesheetApp = React.createClass({displayName: "TimesheetApp",
  getInitialState: function() {
    fields: TimesheetStore.getFields()
  },

  render: function() {
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement(Header, null), 
        React.createElement(RouteHandler, {fields: this.state.fields})
      )
    )
  }
})

module.exports = TimesheetApp;