var Backbone = require('Backbone');
var appTemplate = require('./../templates/app.hbs');
var BeerModel = require('./../models/beerModel');

var BeerView = require('./../views/beerView');

module.exports = Backbone.View.extend({
  el: $('.app-view'),

  template: appTemplate,

  subviews: [],

  events: {
    'click .post-beer': 'postBeer'
  },

  initialize: function () {
    this.model.get('all_beers').on('add change remove', this.render, this);

    this.render();
  },

  postBeer: function (e) {
    e.preventDefault();

    var beerName = this.$el.find('.beer-input').val();
    var beerUser = this.$el.find('.user-input').val();

    var newBeer = new BeerModel({ name: beerName, user: beerUser });

    // this.$el.find('.beer-input').val('');
    // this.$el.find('.user-input').val('');


    this.model.get('all_beers').add(newBeer);

    console.log(this.model.get('all_beers').models[0].get('name'));

  },

  assign : function (view, selector) {
    view.setElement(this.$(selector)).render();
  },

  // render this view and any subviews
  render: function () {
    $(this.el).html(this.template(this.model.toJSON()));
    // this.assign(this.subview, '.subview');

    return this;
  }
});