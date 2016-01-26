var React = require('react');

var Footer = React.createClass({
    render: function() {

        var footerStyle = {
            background: this.props.headerColor?this.props.headerColor:"black"
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 footer" style={footerStyle}></div>
                </div>
            </div>
        )
    }
});

module.exports = Footer;