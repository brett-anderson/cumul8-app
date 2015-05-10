var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

TimesheetApp = React.createClass({displayName: "TimesheetApp",
  render: function() {
    return (
      React.createElement(RouteHandler, null)
    )
  }
})

module.exports = TimesheetApp;