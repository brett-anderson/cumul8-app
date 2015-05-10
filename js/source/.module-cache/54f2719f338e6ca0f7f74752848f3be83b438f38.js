var React        = require('react'),
    Router       = require('react-router'),
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,
    TimesheetApp = require('./components/TimesheetApp'),
    Valid        = require('./components/Valid'),
    Add          = require('./components/Add');

var routes = (
  React.createElement(Route, {path: "/", handler: TimesheetApp}, 
    React.createElement(DefaultRoute, {name: "add", handler: Add}), 
    React.createElement(Route, {name: "valid", handler: Valid})
  )
)

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('app'));
}); 
