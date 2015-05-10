var React = require('react');

CheckIcon = React.createClass({displayName: "CheckIcon",
  render: function() {
    return (
      React.createElement("i", {className: "glyphicon glyphicon-ok pull-right"})
    )
  }
});

module.exports = CheckIcon;