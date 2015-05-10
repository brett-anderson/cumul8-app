var React        = require('react'),
    Router       = require('react-router'),
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,
    TimesheetApp = require('./components/TimesheetApp');
 
var routes = (
  React.createElement(Route, {path: "/", handler: TimesheetApp}, 

    React.createElement(Route, {handler: TimesheetForm}, 
      React.createElement(DefaultRoute, {name: "add", handler: Add})
    )
  )
)

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('signup-app'));
}); 
