var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var About = require('./components/About.jsx');
var Contact = require('./components/Contact.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base} >
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
);

module.exports = Routes;
