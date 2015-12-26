'use strict';
var React = require('react'); //eslint-disable-line
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Routes = require('./routes');
var InitialiseActions = require('./actions/initialiseActions');
/* history={createBrowserHistory()} place in Router open tag
var createBrowserHistory = require('history/lib/createBrowserHistory'); */
InitialiseActions.initApp();

ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('app'));
