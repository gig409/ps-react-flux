'use strict';
var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var History = require('react-router').History;
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {
      author: {id: '', firstName: '', lastName: ''}
    };
  },
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  saveAuthor: function(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.');
    this.history.pushState(null,'/authors');
  },
  render: function() {
    return (
      <div>
        <h1>Manage Author</h1>
        <AuthorForm
          author = {this.state.author}
          onChange = {this.setAuthorState}
          onSave = {this.saveAuthor}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;