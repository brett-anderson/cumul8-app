var React        = require('react'),
    Header       = require('./Header'),
    RouteHandler = require('react-router').RouteHandler;

TimesheetApp = React.createClass({displayName: "TimesheetApp",
  render: function() {
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement(Header, null), 
        React.createElement("div", {className: "row"}, 
          React.createElement(RouteHandler, null)
        )
      )
    )
  }
})

module.exports = TimesheetApp;