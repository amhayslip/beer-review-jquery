var Backbone = require('Backbone');
var BeerModel = require('./../models/beerModel');

module.exports = Backbone.Collection.extend({
  model: BeerModel
});
