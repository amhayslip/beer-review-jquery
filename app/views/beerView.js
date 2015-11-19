var Backbone = require('backbone');
var beerTemplate = require('./../templates/beer.hbs');

module.exports = Backbone.View.extend({
  el: $('.beers'),

  initialize: function () {
    // body...
  },

  render: function () {
    $(this.el).append(beerTemplate(this.model.toJSON()))
  }

});