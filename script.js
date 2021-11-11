const PROJECTS = [
	/* Web Dev */
	{
		name: "Auction Website",
		category: "Web Dev",
		imPath: "img/projects/wd-auction/admin.png",
		description: "Auction website developed for local charity auctions. Front-end: html, css, Bootstrap, JS, Vue, Vuetify. Back-end: Django, python.",
		link: "https://github.com/TLT034/AuctionWebsite"
	},
	/* Mobile Dev */
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/projects/md-fitness/activity-report1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "https://github.com/TLT034/FitnessApp"
	},
	{
		name: "Movie Database App",
		category: "Mobile Dev",
		imPath: "img/projects/md-movie/results-movie.png",
		description: "Movie database (IMDB like) app built with React Native. Features include: movie/actor search, browse by category, ratings, cast, popularity, movie details, actor details, and more.",
		link: "https://github.com/TLT034/MovieDatabase"
	},
	/* Misc */
	{
		name: "Galaga",
		category: "Misc",
		imPath: "img/projects/gd-galaga/gameplay1.png",
		description: "Galaga browser game built with html canvas, css, and JavaScript. Classic Galaga game with multiple stages, multiple enemies, highscores, control mapping, sound effects, particle systems, and more.",
		link: "https://github.com/TLT034/Galaga"
	},
	{
		name: "Lunar Lander",
		category: "Misc",
		imPath: "img/projects/gd-lunar-lander/gameplay.png",
		description: "Lunar Lander browser game built with html canvas, css, and JavaScript. Classic Lunar Lander game with two levels, highscores, control mapping, physics, particle systems, and more.",
		link: "https://github.com/TLT034/LunarLander"
	},
	{
		name: "Battle Worms",
		category: "Misc",
		imPath: "img/projects/gd-worm/gameplay.png",
		description: "Python game using Pygame library. A spin on the classic snake game. Unique features include: 2-player pvp, player biting, player collision (similar to Slither.io game), and more.",
		link: "https://github.com/TLT034/BattleWorms"
	},
	{
		name: "Word Predictor",
		category: "Misc",
		imPath: "img/projects/misc-predictive-text/predict.png",
		description: "Simple word prediction command line app built with C++. Utilizes N-ary tree structure for efficent predicting. Can be built on any compiler/OS using Cmake (uses google-test and clang-format).",
		link: "https://github.com/TLT034/WordPrediction"
	},
	{
		name: "Weights",
		category: "Misc",
		imPath: "img/cpp-logo.png",
		description: "C++ library used for weight and weight conversion. Uses template classes, operator overloading, and more. Can be built on any compiler/OS (uses google-test and clang-format).",
		link: "https://github.com/TLT034/Weights"
	},
	{
		name: "Custom Shared Ptr",
		category: "Misc",
		imPath: "img/cpp-logo.png",
		description: "Custom C++ shared pointer implementation that also allows shared_ptr arrays. Uses five types of constructors, template classes, operator overloading, and more. Can be built on any compiler/OS (uses google-test and clang-format).",
		link: "https://github.com/TLT034/CustomSharedPtr"
	},
];

/** calculates the size of the description and sets card onhover css to move the title based on description size */
function setDescHeight(cardId) {
	let location = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
	if (location = 'projects.html') {
		let descHeight = -$(cardId + ' .description').outerHeight();
		$(cardId).hover(function(){
			$(cardId + ' .card-title').css({
				'transform': 'translate(2px, '+ descHeight + 'px)',
				'-webkit-transform': 'translate(2px, '+ descHeight + 'px)',
				'-moz-transform': 'translate(2px, '+ descHeight + 'px)',
				'-o-transform': 'translate(2px, '+ descHeight + 'px)',
				'-ms-transform': 'translate(2px, '+ descHeight + 'px)',
			});
		}, function(){
			$('.card-title').css({
				'transform': '',
				'-webkit-transform': '',
				'-moz-transform': '',
				'-o-transform': '',
				'-ms-transform': ''
			});
		});
	}
}


$(document).ready(function(){

	let projFilter = localStorage.getItem('projFilter');
	$('#header-text, #header-text-mb').text(projFilter + ' Projects');
	
	$('.cat, .cat-mb').click(function () {
		let filt = $.trim($(this).text());
		localStorage.setItem('projFilter', filt);
		window.location.href = "./projects.html";
	});
	
	
	/* Add touch effect for mobile that is similar to hover effect */
	$('.contact-btn-mb').on('touchstart touchend', function(e) {
		$(this).toggleClass('touch_effect');
	});
	$('.cat-mb').on('touchstart touchend', function(e) {
		$(this).toggleClass('touch_effect');
	});

	/* Adds project cards to the page based on which category is selected */
	let cardIDNum = 0;
	const filteredProjects = PROJECTS.filter( p => p.category === projFilter || projFilter === "All");
	filteredProjects.forEach(p => {
		cardIDNum++;
		$('.proj-sec').append(
			$('<div>', {'id': 'projCard-' + cardIDNum,'class': 'col-12 col-md-5 card'}).append(
				$('<img>', {'class': 'card-img', 'src': p.imPath})
			).append(
				$('<div>', {'class': 'card-img-overlay flex-column justify-content-end'}).append(
					$('<h2>', {'class': 'card-title', text: p.name})
				).append(
					$('<div>', {'class': 'description'}).append(
						$('<p>', {'class': 'card-text mb-1', text: p.description})
					).append(
						$('<p>', {'class': 'card-text', text: 'Click to view in Github'})
					)
				)
			)
		);
	});

	/* Sizing for project cards */
	let cardWidth = $('.card').width();
	$('.card').css({'height': cardWidth + 'px'});

	// need to delay to make sure the project cards are completely loaded
	// so jquery can accuratly get height and so click methods work correctly
	setTimeout(function() {
		for (let i = 1; i <= cardIDNum; i++) {
			console.log(window.outerWidth)
				setDescHeight('#projCard-' + i);
				$('#projCard-' + i).click(function() {
					window.open(filteredProjects[i-1].link);
				});
		}
	}, 100);


	$(window).resize(function(){

		let cardWidth = $('.card').width();
		$('.card').css({'height': cardWidth + 'px'});
	
		for (let i = 1; i <= cardIDNum; i++) {
			setDescHeight('#projCard-' + i);
		}
	});
	
});
