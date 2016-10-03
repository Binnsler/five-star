var profileTemplate = require('../html/profileTemplate.html');

var ProfileView = Backbone.View.extend({
  el: '#profile',
  template: _.template(profileTemplate),

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    this.$el.html(this.template)
  }
});

module.exports = ProfileView;
