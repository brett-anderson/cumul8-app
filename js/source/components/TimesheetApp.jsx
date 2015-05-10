var React        = require('react'),
    Header       = require('./Header'),
    TimesheetStore = require('../stores/TimesheetStore'), 
    RouteHandler = require('react-router').RouteHandler;

TimesheetApp = React.createClass({
  getInitialState: function() {
    return TimesheetStore.getFields();
  },

  render: function() {
    return (
      <div className="container-fluid">
        <Header />
        <RouteHandler />
      </div>
    )
  }
})

module.exports = TimesheetApp;