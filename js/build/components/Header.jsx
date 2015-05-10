var React = require('react');

Header = React.createClass({
  render: function() {
    return (
      <header className="row text-center">
        <h1>Timesheet App</h1>
      </header>
    )
  }
});

module.exports = Header;