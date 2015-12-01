var Backbone = require('Backbone');
var _ = require('lodash');
var appTemplate = require('./../templates/app.hbs');
var BeerModel = require('./../models/beerModel');

var BeerView = require('./../views/beerView');

module.exports = Backbone.View.extend({
  el: '.app-view',

  template: appTemplate,

  events: {
    'click .post-beer': 'postBeer'
  },

  initialize: function () {
    this.$beerInput = this.$('.beer-input');
    this.$userInput = this.$('.user-input');
    this.$beers = this.$('.beers');

    this.listenTo(this.model.get('all_beers'), 'add', this.renderBeer);

    this.render();
  },

  postBeer: function (e) {
    e.preventDefault();

    var beerName = this.$beerInput.val();
    var userName = this.$userInput.val();

    if (beerName && userName) {
      this.model.get('all_beers').add({
        name: beerName,
        user: userName
      }, this);
    }

    this.$beerInput.val('');
    this.$userInput.val('');
  },

  // render this view and any subviews
  renderBeer: function (beer) {
    new BeerView({ model: beer, el: this.$beers }).render();
  }
});