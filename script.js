let projects = [
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/fitness-proj1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "github.com/TLT034/FitnessApp"
	},
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/fitness-proj1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "github.com/TLT034/FitnessApp"
	},
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/fitness-proj1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "github.com/TLT034/FitnessApp"
	},
	{
		name: "Fitness App",
		category: "Mobile Dev",
		imPath: "img/fitness-proj1.jpg",
		description: "Mobile fitness app built with React Native. Features include: Google Maps integration, real-time stat tracking, achievements, sharing, and more.",
		link: "github.com/TLT034/FitnessApp"
	},
]


$(document).ready(function(){

	let projFilter = localStorage.getItem('projFilter');
	$('#header-text').text(projFilter + ' Projects');
	
	$('.cat').click(function () {
		let filt = $(this).text();
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


	projects.forEach(p => {
		// if (p.category == projFilter || projFilter == 'All') {
			$('.proj-sec').append(
				$('<div>', {'class': 'col-12 col-md-5 card'}).append(
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
		// }
	});

	
	// TODO: add same sizing on resize
	/* Sizing for project cards */
	let cardWidth = $('.card').width();
	$('.card').css({'height': cardWidth + 'px'});

	let cardHeight = $('.card').height();
	$('.card-img').css({'height': cardHeight-5  + 'px'});

	let descHeight = $('.description').height();
	document.documentElement.style.setProperty('--move-amount', -descHeight + 'px');

	
});