var React = require('react');

app = React.createClass({displayName: "app",
  render: function() {
    return (
      React.createElement("h1", null, "Hello World!")
    )
  }
})

React.render(
  app,
  document.getElementById('app')
);