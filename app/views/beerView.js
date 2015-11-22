var Backbone = require('backbone');
var beerTemplate = require('./../templates/beer.hbs');

module.exports = Backbone.View.extend({
  el: $('.beers'),

  template: beerTemplate,

  initialize: function () {

  },

  render: function () {
    $(this.el).html(this.template(this.model.toJSON()))
  }

});