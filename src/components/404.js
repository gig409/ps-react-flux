'use strict';
var React = require('react');
var IndexLink = require('react-router').IndexLink;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Fallen of the edge</p>
        <p><IndexLink to="/">Back to Home</IndexLink></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;
