var React = require('react'),
    State = require('react-router').State;

var Valid = React.createClass({displayName: "Valid",
  mixins: [State],

  getInitialState: function() {
    return {};
  },

  render: function() {
    console.log(this.getParams().email);
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4 col-centered box text-center valid"}, 
          React.createElement("h2", null, "Success!"), 
          React.createElement("button", {className: "btn btn-default"}, "Add another? ")
        )
      )
    )
  }
});

module.exports = Valid;