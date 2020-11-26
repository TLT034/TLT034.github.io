const PROJECTS = [
	/* Web Dev */

	/* Mobile Dev */
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/projects/md-fitness/activity-report1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "github.com/TLT034/FitnessApp"
	},
	{
		name: "Movie Database App",
		category: "Mobile Dev",
		imPath: "img/projects/md-movie/results-movie.png",
		description: "Movie database (IMDB like) app built with React Native. Features include: movie/actor search, browse by category, ratings, cast, popularity, movie details, actor details, and more.",
		link: "github.com/TLT034/MovieDatabase"
	},
	/* Misc */
	{
		name: "Galaga",
		category: "Misc",
		imPath: "img/projects/gd-galaga/gameplay1.png",
		description: "Galaga browser game built with html canvas, css, and JavaScript. Classic Galaga game with multiple stages, multiple enemies, highscores, control mapping, sound effects, particle systems, and more.",
		link: "github.com/TLT034/Galaga"
	},
	{
		name: "Lunar Lander",
		category: "Misc",
		imPath: "img/projects/gd-lunar-lander/gameplay.png",
		description: "Lunar Lander browser game built with html canvas, css, and JavaScript. Classic Lunar Lander game with two levels, highscores, control mapping, physics, particle systems, and more.",
		link: "github.com/TLT034/LunarLander"
	},
	{
		name: "Battle Worms",
		category: "Misc",
		imPath: "img/projects/gd-worm/gameplay.png",
		description: "Python game using Pygame library. A spin on the classic snake game. Unique features include: 2-player pvp, player biting, player collision (similar to Slither.io game), and more.",
		link: "github.com/TLT034/BattleWorms"
	},
	{
		name: "Word Predictor",
		category: "Misc",
		imPath: "img/projects/misc-predictive-text/predict.png",
		description: "Simple word prediction command line app built with C++. Utilizes N-ary tree structure for efficent predicting. Can be built on any terminal, compiler, and OS.",
		link: "github.com/TLT034/WordPredictor"
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

	// TODO: get mobile category buttons working

	let projFilter = localStorage.getItem('projFilter');
	$('#header-text').text(projFilter + ' Projects');
	
	$('.cat').click(function () {
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

	let cardIDNum = 0;
	PROJECTS.forEach(p => {
		if (p.category == projFilter || projFilter == 'All') {
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
		}
	});

	/* Sizing for project cards */
	let cardWidth = $('.card').width();
	$('.card').css({'height': cardWidth + 'px'});

	// need to delay to make sure the project cards are completely loaded so jquery can accuratly get height
	setTimeout(function() {
		for (let i = 1; i <= cardIDNum; i++) {
			setDescHeight('#projCard-' + i);
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