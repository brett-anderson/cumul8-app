var React = require('react');

var Valid = React.createClass({displayName: "Valid",
  willTransitionTo: function(transition, params, query, callback) {
    console.log(transition, params, query, callback);
  },
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4 col-centered box text-center valid"}, 
          React.createElement("h2", null, "Submitting..."), 
          React.createElement("i", {className: "fa fa-spinner fa-pulse fa-5x"})
        )
      )
    )
  }
});

module.exports = Valid;