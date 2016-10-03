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
    var posts = this.model.get('recentPosts');
    posts.forEach(function(post){
      this.$el.append(this.template(post));
    }, this);
  }
});

module.exports = ProfilePosts;
