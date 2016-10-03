var moment = require("moment")

var ProfileModel = Backbone.Model.extend({
  url: 'http://hiring-api.pivot-developers.net/profile/me',

  defaults: {
    recentPosts: []
  },

  parse: function(data){
    data.recentPosts.forEach(function(post){
      var newDate = moment(post.created).format('MMM Do, YYYY');
      post.created = newDate;
    });

    return data;
  }
});

module.exports = ProfileModel;
