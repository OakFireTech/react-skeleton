var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');
var Base = require('./components/Base.jsx');
var Header = require('./components/Header.jsx');
var Footer = require('./components/Footer.jsx');

ReactDOM.render(<Base />, document.getElementById('base'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));