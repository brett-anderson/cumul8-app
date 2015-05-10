var React        = require('react'),
    Router       = require('react-router'),
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,
    TimesheetApp = require('./components/TimesheetApp'),
    Valid        = require('./components/Valid'),
    AddTime      = require('./components/AddTime');

// using react-router to handle routing
var routes = (
  <Route path="/" handler={TimesheetApp} >
    <DefaultRoute name='addTime' handler={AddTime} />
    <Route name='valid' handler={Valid} />
  </Route>
)

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
}); 
