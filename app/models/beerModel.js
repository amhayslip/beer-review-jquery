var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    // name of the beer
    name: '',

    // user associated with the beer
    user: ''
  }
});