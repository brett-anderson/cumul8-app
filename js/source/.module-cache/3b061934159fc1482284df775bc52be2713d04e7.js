var React = require('react');

Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", {className: "row text-center"}, 
        React.createElement("h1", null, "Submit Timesheet")
      )
    )
  }
});

module.exports = Header;