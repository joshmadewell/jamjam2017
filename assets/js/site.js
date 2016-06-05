var currentGalleryIndex = 0;
var gallery = [
	'gallery-125.jpg',
	'gallery-129.jpg',
	'gallery-26.jpg',
	'gallery-37.jpg',
	'gallery-1.jpg',
	'gallery-69.jpg',
	'gallery-24.jpg',
	'gallery-19.jpg',
	'gallery-68.jpg',
	'gallery-57.jpg',
	'gallery-63.jpg',
	'gallery-50.jpg',
	'gallery-12.jpg',
	'gallery-152.jpg',
	'gallery-82.jpg',
	'gallery-160.jpg',
	'gallery-88.jpg',
	'gallery-159.jpg',
	'gallery-47.jpg',
	'gallery-28.jpg',
	'gallery-66.jpg',
	'gallery-76.jpg',
	'gallery-138.jpg',
	'gallery-83.jpg',
	'gallery-137.jpg',
	'gallery-27.jpg',
	'gallery-81.jpg',
	'gallery-123.jpg',
	'gallery-134.jpg',
	'gallery-67.jpg',
	'gallery-31.jpg',
	'gallery-42.jpg',
	'gallery-131.jpg',
	'gallery-176.jpg',
	'gallery-45.jpg',
	'gallery-52.jpg',
	'gallery-86.jpg',
	'gallery-46.jpg',
	'gallery-121.jpg',
	'gallery-34.jpg',
	'gallery-128.jpg',
	'gallery-135.jpg',
	'gallery-48.jpg',
	'gallery-13.jpg',
	'gallery-61.jpg',
	'gallery-87.jpg',
	'gallery-10.jpg',
	'gallery-136.jpg',
	'gallery-89.jpg',
	'gallery-84.jpg',
	'gallery-41.jpg',
	'gallery-60.jpg',
	'gallery-33.jpg',
	'gallery-158.jpg',
	'gallery-78.jpg',
	'gallery-142.jpg',
	'gallery-20.jpg',
	'gallery-102.jpg',
	'gallery-32.jpg',
	'gallery-98.jpg',
	'gallery-132.jpg',
	'gallery-59.jpg',
	'gallery-139.jpg',
	'gallery-117.jpg',
	'gallery-77.jpg',
	'gallery-94.jpg',
	'gallery-9.jpg',
	'gallery-126.jpg',
	'gallery-30.jpg',


	// last in gallery because they are elsewhere on the site
	'gallery-124.jpg',
	'gallery-25.jpg',
	'gallery-11.jpg',
	'gallery-49.jpg',
	'gallery-51.jpg',
	'gallery-178.jpg',
	'gallery-153.jpg'
];

$(function() {
	"use strict";
	var stickOnScroll;

	//Header Option
	$('#header').addClass('normal');
	//Choose Here Class Name (normal or fixed or intelligent);

	if($('#wrapper').hasClass('boxed')){
		$('body').addClass('bg-grey');
	}

	$("#people").owlCarousel({
		autoPlay : 3000,
		items : 5,
		itemsDesktop : [1199, 4],
		itemsDesktopSmall : [979, 4],
		itemsTablet : [768, 3],
		itemsMobile : [767, 1],
		navigation : true
	});

	$("#people-thought").owlCarousel({
		autoPlay : 3000,
		items : 3,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 3],
		itemsMobile : [767, 1],
		navigation : true
	});

	$("#wedding-item").owlCarousel({
		autoPlay : false,
		items : 2,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 3],
		itemsMobile : [767, 1],
		navigation : true
	});

	$("#partner-slider").owlCarousel({
		autoPlay : false,
		items : 4,
		itemsDesktop : [1199, 4],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 3],
		itemsMobile : [767, 1],
		navigation : true
	});

	$(".team-slider").owlCarousel({
		autoPlay : 3000,
		items : 3,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [992, 3],
		itemsTablet : [768, 3],
		itemsMobile : [767, 1],
		navigation : true
	});

	$(".home-menu").on('click', function() {
		$(this).toggleClass("active");
		$(this).toggleClass("remove");
		$(".navigation").slideToggle(500);
	});

	$('.navigation li').on('click', function() {
		if ($(window).width() < 768) {
			$(this).children('.drop-down').slideToggle();
		}
	});

	$(window).resize(function() {
		var w = $(window).width();
		if ((w > 768) && $(".navigation").is(':hidden')) {
			$(".navigation").removeAttr('style');
		}
	});

	if ($("#countdown").length) {
		var weddingTime = new Date(2017, 2, 18, 16);

		var offset = 4;
		var localOffset = weddingTime.getTimezoneOffset() / 60;

		weddingTime.setHours(weddingTime.getHours() + (offset - localOffset));

		$("#countdown").countdown({
			until : weddingTime
		});
	}

	// Filltering
	$(window).load(function(){
		if ($('.gallery-part .gallery-img-sec').length) {
			var $container = $('.gallery-img-sec').isotope({
				itemSelector : '.main-item',
				masonry: {}
			})

			$('.gallery-part .tabbing-wrapper button').on('click', function() {
				var filterValue = "." + $(this).attr('data-filter');

				$container.isotope({
					filter : filterValue
				});

				var fancybox = $(this).attr('data-filter');

				$(filterValue).find('a').attr({
					'data-fancybox-group' : fancybox
				});
			});
		}
	});

	$('#load-more-gallery').click(function () {
		var elements = [];
		for (var x = 0; x < 4 && currentGalleryIndex < 77; x++, currentGalleryIndex++) {
			var imageSrc = 'assets/images/gallery/' + gallery[currentGalleryIndex];
			var $element =  $('<li class="main-item all engage">');
			$element.append('<a  class="fancybox-button" data-fancybox-group="fancybox-button" href="' + imageSrc + '" title=""> <img alt="" src="' + imageSrc + '"></a>')
			elements.push($element[0]);
		}

		$('#offscreen-image-loader').append(elements).imagesLoaded().progress(function () {
			$('.gallery-img-sec').isotope('insert', elements).isotope('layoutItems', elements, function () {});
		});
	});

	if ($('.fancybox-button').length) {
		$(".fancybox-button").fancybox({
			prevEffect : 'none',
			nextEffect : 'none',
			closeBtn : true,
			helpers : {
				title : {
					type : 'inside'
				},
				buttons : {}
			}
		});
	}

	//Custom Map
	if ($('#map-view').length) {
		var pos = new google.maps.LatLng(42.016137, -71.010856);

		var map = new google.maps.Map(document.getElementById('map-view'), {
			zoom : 16,
			center : pos,
			scrollwheel : false,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});

		var pos1 = new google.maps.LatLng(41.238282, -73.668761);
		var pos2 = new google.maps.LatLng(41.237500, -73.668320);
		var pos3 = new google.maps.LatLng(41.234900, -73.675830);

		var marker1 = new google.maps.Marker({
			position : pos1,
			map : map,
			draggable : false,
			// icon : 'assets/images/map-icon-2.png'
		});

		var marker2 = new google.maps.Marker({
			position : pos2,
			map : map,
			draggable : false,
			// icon : 'assets/images/map-icon-2.png'
		});
		var marker3 = new google.maps.Marker({
			position : pos3,
			map : map,
			draggable : false,
			// icon : 'assets/images/map-icon-2.png'
		});
	}

	if ($('#map').length) {
		var pos = new google.maps.LatLng(42.016137, -71.010856);

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom : 16,
			center : pos,
			scrollwheel : false,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});

		var pos1 = new google.maps.LatLng(41.238282, -73.668761);
		var pos2 = new google.maps.LatLng(41.237500, -73.668320);
		var pos3 = new google.maps.LatLng(41.234900, -73.675830);

		var marker1 = new google.maps.Marker({
			position : pos1,
			map : map,
			draggable : false,
			// icon : 'assets/images/locater-img.png'
		});
	}

	$(window).load(function() {
		$("#loading").fadeOut(500);
	});

	//=================Header Style function================
	if ($('#header').hasClass('fixed')) {
		$('#header').next().addClass('top-m');
	}

	if ($('#header').hasClass('intelligent')) {
		$('#header').next().addClass('top-m');
	};

	var class_pr = $('body').attr('class');
	var headerHeight = $('#header').outerHeight();
	var st = $(window).scrollTop();

	stickOnScroll = function() {
		if ($('#header').hasClass("intelligent")) {
			$('#header').removeClass('normal');
			$('#header').next().addClass('top-m');
			var pos = $(window).scrollTop();

			if (pos > headerHeight) {
				if (pos > st) {
					$('#header').addClass('simple')
					$('#header.simple').removeClass('down');
					$('#header.simple').addClass('fixed up');

				} else {
					$('#header.simple').removeClass('up');
					$('#header.simple').addClass('fixed down');

				}
				st = pos;
			} else {
				$('#header.simple').removeClass('fixed down up simple');
			}

			if (pos == $(document).height() - $(window).height()) {
				$('#header.simple').removeClass('up');
				$('#header.simple').addClass('fixed down');
			}
		} else if ($('body').hasClass("fix")) {
			$('#header').next().addClass('top-m');
			$('#header').addClass('simple fixed');
			$('#header').removeClass('down up');
			$('#wrapper').css({
				paddingTop : 0
			});
		} else {
			$('#header.simple').removeClass('fixed down up simple');
			$('#header').addClass('normal');

			$('#wrapper').css({
				paddingTop : 0
			});
		}
	};

	stickOnScroll();

	$(window).scroll(function() {
		stickOnScroll();
	});
});