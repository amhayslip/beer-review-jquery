var Backbone = require('Backbone');
var BeerModel = require('./models/beerModel');
var ReviewModel = require('./models/reviewModel');

var AppView = require('./views/appView');
var BeerView = require('./views/beerView');
var ReviewView = require('./views/reviewView');

var beerModel = new BeerModel('Goldstar', 'Aaron');

var beerView = new BeerView({ model: beerModel});
var reviewView = new ReviewView();

// var appView = new AppView();

var beerModel = new BeerModel("Goldstar", "Aaron");
var beerView = new BeerView({ model: beerModel });

beerView.render();


// $(document).on('ready', function() {
//   // starting point for generating IDs
//   var baseID = 0;

//   // array of all beer in app
//   var beers = [];

//   // the current beer being viewed
//   var currentBeer = null;

//   // // beer constructor
//   var Beer = function (name, user) {
//     this.name = name;
//     this.user = user;
//     this.id = generateID();
//     this.reviews = [];
//   }

//   // review constructor
//   var Review = function (notes, user) {
//     this.notes = notes;
//     this.user = user;
//   }

//   generateID = function () {
//     return baseID += 1;
//   }

//   var postBeer = function () {
//     var beerName = $('.beer-input').val();
//     var userName = $('.user-input').val();

//     // create new beer
//     var beer = new Beer(beerName, userName);

//     // push to beers array
//     beers.push(beer);

//     // require both fields
//     if (beerName && userName) {

//       // compile our handlebars template
//       var source = $('#beer-template').html();
//       var template = Handlebars.compile(source);

//       $('.beers').append(template(beer));
   
//       // clear input fields after submit
//       $('.beer-input').val('');
//       $('.user-input').val('');

//       // binding 'view-reviews' after post because the element doesn't exist until this point
//       bindEvents();
//     }
//   };

//   var postReview = function () {
//     var notes = $('.notes-input').val();
//     var userName = $('.user-review-input').val();

//     // create new review
//     var review = new Review(notes, userName);

//     // add review to current beers reviews array
//     currentBeer.reviews.push(review);

//     // require both fields
//     if (notes && userName) {

//       var source = $('#review-template').html();
//       var template = Handlebars.compile(source);
//       $('.reviews-container').append(template(review));

//       // clear inputs after submit
//       $('.notes-input').val('');
//       $('.user-review-input').val('');
//     }
//   };

//   // populate DOM with the current beer's reviews
//   var populateReviews = function () {
//     for (i = 0; i < currentBeer.reviews.length; i += 1) {
//       var source = $('#review-template').html();
//       var template = Handlebars.compile(source);

//       $('.reviews-container').append(template(currentBeer.reviews[i]));
//     }
//   };

//   // helper method
//   var findBeerByID = function (beerID) {
//     for (var i = 0; i < beers.length; i += 1) {
//       if (beers[i].id === beerID) {
//         return beers[i];
//       }
//     }
//   };

//   var viewReviews = function(beerID) {
//     $('.beers').removeClass('show');
//     $('.beer-form').removeClass('show');

//     $('.reviews').addClass('show');
//     $('.review-form').addClass('show');

//     // set current beer to the clicked beer
//     currentBeer = findBeerByID(beerID);

//     // remove current reviews
//     $('.reviews-container').html('');

//     // populate with new reviews
//     populateReviews();
  
//     // add beer title to reviews heading
//     $('.current-beer').html('for ' + currentBeer.name);
//   };

//   var viewBeers = function() {
//     $('.beers').addClass('show');
//     $('.beer-form').addClass('show');

//     $('.reviews').removeClass('show');
//     $('.review-form').removeClass('show');
//   };

//   // Events
//   var bindEvents = function () {
//     $('.view-reviews').on('click', function (e) {
//       e.preventDefault();
//       var beer = $(this).closest('.beer').data('id');
//       viewReviews(beer);
//     });
//   };

//   $('.post-beer').on('click', function (e) {
//     e.preventDefault();
//     postBeer();
//   });

//   $('.post-review').on('click', function (e) {
//     e.preventDefault();
//     postReview();
//   });

//   $('.back').on('click', function (e) {
//     e.preventDefault();
//     viewBeers();
//   });
// });
