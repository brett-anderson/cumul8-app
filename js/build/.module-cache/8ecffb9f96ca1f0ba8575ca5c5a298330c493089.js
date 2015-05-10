var React = require('react'),
    TimesheetStore = require('../stores/TimesheetStore'),
    State = require('react-router').State;

var Valid = React.createClass({displayName: "Valid",
  mixins: [State],

  getInitialState: function() {
    return TimesheetStore.getFields();
  },

  render: function() { 
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4 col-centered box text-center valid"}, 
          React.createElement("i", {className: "fa fa-check fa-5x"}), 
          React.createElement("p", null, "Thank you ", React.createElement("strong", null, this.state.email)), 
          React.createElement("p", null, "You have logged ", this.state.time, " today"), 
          React.createElement("button", {className: "btn btn-default"}, "Add another? ")
        )
      )
    )
  }
});

module.exports = Valid;