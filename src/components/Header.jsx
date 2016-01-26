var React = require('react');

var Header = React.createClass({
    render: function() {

        var headerStyle = {
            background: this.props.headerColor?this.props.headerColor:"black"
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 header" style={headerStyle}></div>
                </div>
            </div>
        );
    }
});

module.exports = Header;