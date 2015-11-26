var Backbone = require('Backbone');
var _ = require('lodash');
var appTemplate = require('./../templates/app.hbs');
var BeerModel = require('./../models/beerModel');

var BeerView = require('./../views/beerView');

module.exports = Backbone.View.extend({
  el: $('.app-view'),

  template: appTemplate,

  events: {
    'click .post-beer': 'postBeer'
  },

  initialize: function () {
    this.listenTo(this.model.get('all_beers'), 'add', this.render);

    this.render();
  },

  postBeer: function (e) {
    e.preventDefault();

    var beerName = this.$el.find('.beer-input').val();
    var beerUser = this.$el.find('.user-input').val();

    if (beerName && beerUser) {
      this.model.get('all_beers').add({
        name: beerName,
        user: beerUser
      });
    }
  },

  // render this view and any subviews
  render: function () {
    $(this.el).html(this.template(this.model.toJSON()));

    this.model.get('all_beers').each(function (b) {
      new BeerView({ model: b, el: $('.beers') }).render();
    }, this);

    return this;
  }
});