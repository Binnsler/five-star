// Template
var profileTemplate = require('../html/profileTemplate.html');

// Sub-views
var ProfileDetails = require('./profileDetails.js');
var ProfilePosts = require('./profilePosts.js');

// View
var ProfileView = Backbone.View.extend({
  el: '#profile',
  template: _.template(profileTemplate),

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template);
    this.profileDetails = new ProfileDetails({model: this.model});
    this.profilePosts = new ProfilePosts({model: this.model});
    return this;
  }
});

module.exports = ProfileView;
