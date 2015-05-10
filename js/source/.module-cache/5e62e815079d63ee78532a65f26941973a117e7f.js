var React          = require('react'),
    TimesheetStore = require('../stores/TimesheetStore'),
    Link           = require('react-router').Link,
    State          = require('react-router').State;

var Record = React.createClass({displayName: "Record",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.email), 
        React.createElement("td", null, this.props.time), 
        React.createElement("td", null, this.props.type), 
        React.createElement("td", {className: "btn btn-danger"}, "x")
      )
    )
  }
})


var Valid = React.createClass({displayName: "Valid",
  mixins: [State],

  getInitialState: function() {
    var fields = TimesheetStore.getFields();
    var records = TimesheetStore.getRecords();
    return {
      email: fields.email,
      time: fields.time,
      message: fields.message,
      records: records
    }
  },

  render: function() {
    var records = this.state.records.map(function (record) {
      return (
        React.createElement(Record, {key: record.id, email: record.email, time: record.time, type: record.type})
      )
    });
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4 col-centered box text-center valid"}, 
          React.createElement("i", {className: "fa fa-check fa-5x"}), 
          React.createElement("p", null, "Thank you ", React.createElement("strong", null, this.state.email)), 
          React.createElement("p", null, "You have logged ", this.state.time, " today"), 
          React.createElement("table", {className: "table text-left table-condensed"}, 
            React.createElement("th", null, "Email"), 
            React.createElement("th", null, "Time"), 
            React.createElement("th", null, "Type"), 
            records
          ), 
          React.createElement(Link, {className: "btn btn-default", to: "addTime"}, "Add another? ")
        )
      )
    )
  }
});

module.exports = Valid;