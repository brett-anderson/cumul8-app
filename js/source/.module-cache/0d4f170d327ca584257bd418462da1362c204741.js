var React = require('react');

var Valid = React.createClass({displayName: "Valid",

  render: function() {
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