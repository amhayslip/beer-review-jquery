$(document).on('ready', function() {

  // starting point for generating IDs
  var baseID = 0;

  // array of all beer in app
  var beers = [];

  // the current beer being viewed
  var currentBeer = null;

  // beer constructor
  var Beer = function (name, user) {
    this.name = name;
    this.user = user;
    this.id = generateID();
    this.reviews = [];
  }

  // review constructor
  var Review = function (notes, user) {
    this.notes = notes;
    this.user = user;
  }

  generateID = function () {
    return baseID += 1;
  }

  var postBeer = function () {
    var beerName = $('.beer-input').val();
    var userName = $('.user-input').val();

    // create new beer
    var beer = new Beer(beerName, userName);

    // push to beers array
    beers.push(beer);

    // require both fields
    if (beerName && userName) {
      $('.beers').append(
        '<p class="beer" data-id=' + beer.id + '><span>' + beer.name + '</span> - <span class="user-post">'+ beer.user +'</span> <a href="#" class="view-reviews">Reviews</a> </p>'
      );  

      // clear input fields after submit
      $('.beer-input').val('');
      $('.user-input').val('');

      // binding 'view-reviews' after post because the element doesn't exist until this point
      bindEvents();
    }
  };

  var postReview = function () {
    var notes = $('.notes-input').val();
    var userName = $('.user-review-input').val();

    // create new review
    var review = new Review(notes, userName);

    // add review to current beers reviews array
    currentBeer.reviews.push(review);

    // require both fields
    if (notes && userName) {
      $('.reviews-container').append(
        '<p class="review"><span>' + review.notes + '</span> - <span class="user-post">'+ review.user +'</span> </p>'
      )

      // clear inputs after submit
      $('.notes-input').val('');
      $('.user-review-input').val('');
    }
  };

  // populate DOM with the current beer's reviews
  var populateReviews = function () {
    for (i = 0; i < currentBeer.reviews.length; i += 1) {
      $('.reviews-container').append(
        '<p class="review"><span>' + currentBeer.reviews[i].notes + '</span> - <span class="user-post">'+ currentBeer.reviews[i].user +'</span> </p>'
      )
    }
  };

  // helper method
  var findBeerByID = function (beerID) {
    for (var i = 0; i < beers.length; i += 1) {
      if (beers[i].id === beerID) {
        return beers[i];
      }
    }
  };

  var viewReviews = function(beerID) {
    $('.beers').removeClass('show');
    $('.beer-form').removeClass('show');

    $('.reviews').addClass('show');
    $('.review-form').addClass('show');

    // set current beer to the clicked beer
    currentBeer = findBeerByID(beerID);

    // remove current reviews
    $('.reviews-container').html('');

    // populate with new reviews
    populateReviews();
  
    // add beer title to reviews heading
    $('.current-beer').html('for ' + currentBeer.name);
  };

  var viewBeers = function() {
    $('.beers').addClass('show');
    $('.beer-form').addClass('show');

    $('.reviews').removeClass('show');
    $('.review-form').removeClass('show');
  };

  // Events
  var bindEvents = function () {
    $('.view-reviews').on('click', function (e) {
      e.preventDefault();
      var beer = $(this).closest('.beer').data('id')
      viewReviews(beer);
    });
  };

  $('.post-beer').on('click', function (e) {
    e.preventDefault();
    postBeer();
  });

  $('.post-review').on('click', function (e) {
    e.preventDefault();
    postReview();
  });

  $('.back').on('click', function (e) {
    e.preventDefault();
    viewBeers();
  });
});
