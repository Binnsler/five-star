// Template
var detailsTemplate = require('../html/detailsTemplate.html');

// View
var ProfileDetails = Backbone.View.extend({
  el: '#profile-details',
  template: _.template(detailsTemplate),

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    this.$el.html(this.template())
  }
});

module.exports = ProfileDetails;
