'use strict';

var React = require('react');
var Lifecycle = require('react-router').Lifecycle;

var About = React.createClass({
  mixins: [Lifecycle],
  routerWillLeave(nextLocation) {
    console.log(nextLocation);
    /* if (nextLocation.pathname === '/authors') {
      return false;
    } */
  },
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
        </p>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
      </div>
    );
  }
});

module.exports = About;
