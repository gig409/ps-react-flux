'use strict';
var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var History = require('react-router').History;
var toastr = require('toastr');
var Lifecycle = require('react-router').Lifecycle;

var ManageAuthorPage = React.createClass({
  mixins: [History, Lifecycle],
  propTypes: {
    author: React.PropTypes.object,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    errors: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false,
      saved: false
    };
  },
  routerWillLeave: function(nextLocation) {
    if (this.state.dirty && !this.state.saved) {
      return 'Are you sure?';
    }
  },
  componentWillMount: function() {
    var authorId = this.props.params.id;
    console.log(authorId);
    if (authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },
  setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters';
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  },
  saveAuthor: function(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    AuthorActions.createAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success('Author saved.');
    this.setState({saved: true});
    this.history.pushState(null,'/authors');
  },
  render: function() {
    return (
      <div>
        <h1>Manage Author</h1>
        <AuthorForm
          author = {this.state.author}
          onChange = {this.setAuthorState}
          onSave = {this.saveAuthor}
          errors = {this.state.errors}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
