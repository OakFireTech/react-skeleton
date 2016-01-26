var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Base = React.createClass({
   render: function() {
       return (
           <div>
               <Header />

               <div>
                   <h1>Base Content Heading</h1>
                   {this.props.children}
               </div>

                <Footer />
           </div>
       )
   }
});

module.exports = Base;