'use strict';

var React = require('react'); //eslint-disable-line
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var Homepage = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var NotFoundRoute = require('./components/404');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var Redirect = require('react-router').Redirect;

/* onEnter={requireAuth} place in route before closing tag
function requireAuth(nextState, replaceState) {
  replaceState({nextPathname: nextState.location.pathname}, '/');
} */

var routes = (
  <Route path = '/' component = {App}>
    <IndexRoute component={Homepage} />
    <Route path = 'authors' component = {Authors}/>
    <Route path = 'author' component = {ManageAuthorPage} />
    <Route path = 'about' component = {About} />
    <Redirect from='about-us' to='about'/>
    <Route path='*' component={NotFoundRoute}/>
  </Route>

);
module.exports = routes;
