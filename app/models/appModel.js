var Backbone = require('Backbone');
var BeerCollection = require('./../collections/beerCollection');

module.exports = Backbone.Model.extend({

  // represent the current beer being viewed
  current_beer: null,

  // all beers
  all_beers: new BeerCollection(),

  initialize: function () {
    var collection = new BeerCollection;
    console.log(collection);

    this.set('all_beers', collection);
  }
});