var ProfileModel = Backbone.Model.extend({
  url: 'http://hiring-api.pivot-developers.net/profile/me',

  defaults: {
    recentPosts: []
  }
});

module.exports = ProfileModel;
