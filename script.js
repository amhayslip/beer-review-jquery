$(document).on('ready', function() {

	// starting point for generating IDs
	var baseID = 0;

	// array of all beer in app
	var beers = [];

	var Beer = function (name, user) {
		this.name = name;
		this.user = user;
		this.id = generateID();
	}

	generateID = function () {
		return baseID += 1;
	}

	var postBeer = function() {
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

	var viewReviews = function(beerID) {
		$('.beers').removeClass('show');
		$('.beer-form').removeClass('show');

		$('.reviews').addClass('show');
		$('.review-form').addClass('show');

		for (var i = 0; i < beers.length; i += 1) {
			if (beers[i].id === beerID) {
				$('.current-beer').html('for ' + beers[i].name);
			}
		}
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

	$('.post').on('click', function (e) {
		e.preventDefault();
		postBeer();
	});

	$('.back').on('click', function (e) {
		e.preventDefault();
		viewBeers();
	});
});
