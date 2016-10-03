// Variables
global.$ = require('jquery');
global._ = require('underscore');
var Backbone = require('backbone');

// SASS
require('./index.scss');

// Model and Top Level View
var ProfileModel = require('./models/model.js');
var ProfileView = require('./views/profile.js');

// Instantiation
$(document).ready(function () {
  var profileModel = new ProfileModel();
  var profileView = new ProfileView({model: profileModel});

  profileModel.fetch();
});
