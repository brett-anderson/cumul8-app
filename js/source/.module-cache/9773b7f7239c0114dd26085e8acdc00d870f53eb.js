var React = require('react');

var Valid = React.createClass({displayName: "Valid",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4 col-centered box text-center"}, 
          React.createElement("i", {className: "fa fa-spinner fa-pulse fa-5x"})
        )
      )
    )
  }
});

module.exports = Valid;