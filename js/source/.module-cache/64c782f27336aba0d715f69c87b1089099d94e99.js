var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

TimesheetApp = React.createClass({displayName: "TimesheetApp",
  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement(RouteHandler, null)
        )
      )
    )
  }
})

module.exports = TimesheetApp;