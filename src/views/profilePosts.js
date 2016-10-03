// Template
var postTemplate = require('../html/postTemplate.html');

// View
var ProfilePosts = Backbone.View.extend({
  el: '#posts-list',
  template: _.template(postTemplate),

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    this.$el.html(this.template);
  }
});

module.exports = ProfilePosts;
