var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  defaults: {
    // notes on the beer
    notes: '',

    // user associated with the beer
    user: '',
  },

  initialize: function (notes, user) {
    this.set('name', name);
    this.set('user', user);
  }
});