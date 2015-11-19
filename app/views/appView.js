var Backbone = require('backbone');
var beerTemplate = require('./../templates/beer.hbs');

console.log(beerTemplate);

module.exports = Backbone.View.extend({
  el: $('body'),

  initialize: function () {},

  render: function () {
    alert(beerTemplate());
  }
});