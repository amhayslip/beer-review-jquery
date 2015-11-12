$(document).on('ready', function() {

	// starting point for generating IDs
	var baseID = 0;

	// array of all beer in app
	var beers = [];

	// the current beer being viewed
	var currentBeer = null;

	var Beer = function (name, user) {
		this.name = name;
		this.user = user;
		this.id = generateID();
		this.reviews = [];
	}

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

		var beer = new Beer(beerName, userName);

		beers.push(beer);

		if (beerName && userName) {
			$('.beers').append(
				'<p class="beer" data-id=' + beer.id + '><span>' + beer.name + '</span> - <span class="user-post">'+ beer.user +'</span> <a href="#" class="view-reviews">Reviews</a> </p>'
			);	
			$('.beer-input').val('');
			$('.user-input').val('');

			bindEvents();
		}
	};

	var postReview = function () {
		var notes = $('.notes-input').val();
		var userName = $('.user-review-input').val();

		var review = new Review(notes, userName);

		currentBeer.reviews.push(review);


		if (notes && userName) {
			$('.reviews-container').append(
				'<p class="review"><span>' + review.notes + '</span> - <span class="user-post">'+ review.user +'</span> </p>'
			)
			$('.notes-input').val('');
			$('.user-review-input').val('');
		}
	};

	var populateReviews = function () {
		for (i = 0; i < currentBeer.reviews.length; i += 1) {
			$('.reviews-container').append(
				'<p class="review"><span>' + currentBeer.reviews[i].notes + '</span> - <span class="user-post">'+ currentBeer.reviews[i].user +'</span> </p>'
			)
		}
	};

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

		currentBeer = findBeerByID(beerID);

		$('.reviews-container').html('');

		populateReviews();
	
		$('.current-beer').html('for ' + currentBeer.name);
	};

	var viewBeers = function() {
		$('.beers').addClass('show');
		$('.beer-form').addClass('show');

		$('.reviews').removeClass('show');
		$('.review-form').removeClass('show');
	}


	var bindEvents = function () {
		$('.view-reviews').on('click', function (e) {
			e.preventDefault();
			var beer = $(this).closest('.beer').data('id')
			viewReviews(beer);
		});
	}

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
