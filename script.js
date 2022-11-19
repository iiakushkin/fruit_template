jQuery(function($){
	"use strict";


	//Responsive Menu
	if($('.fa-bars').length) {
		$('.fa-bars').on('click', function(){
			$('.mobile_navigation ul').show();
			$(this).hide();
			$('.fa-xmark').show();
			$('.mobile_navigation ul.sub-menu').hide();
		});
		$('.fa-xmark').on('click', function(){
			$('.mobile_navigation ul').hide();
			$(this).hide();
			$('.fa-bars').show();
		});
	};

	//Header Slider
	if($('.home_slider').length) {
		$('.home_slider').slick({
			vertical: true,
			arrows: false,
			dots: true,
			speed: 1000
		});
	};

	//Twitter Slider
	if($('.content_slider_twitter').length) {
		$('.content_slider_twitter').slick({
			vertical: true,
			appendArrows: $('.twitter_slider .arrows'),
			prevArrow: "<span class=\"up\"><i class=\"fa-solid fa-circle-up\"></i></span>",
			nextArrow: "<span class=\"down\"><i class=\"fa-solid fa-circle-down\"></i></span>",
			// speed: 1000
		});
	};

	if($('.open_video').length) {
		$(document).ready(function() {
		 	$('.open_video').magnificPopup({
		 	    disableOn: 700,
		        type: 'iframe',
		        mainClass: 'mfp-fade',
		        removalDelay: 160,
		        preloader: false,

		        fixedContentPos: false
		    });
		});
	};

	if($('.testy_gallery').length) {
		$(document).ready(function() {
		 	$('.testy_gallery').magnificPopup({
	        	type: 'image',
	        	closeOnContentClick: true,
	        	mainClass: 'mfp-img-mobile',
	        	image: {
	        		verticalFit: true
	        	}
	        });
		});
	};
	
	//Carousel Shop items Slider
	if($('.shop_carousel').length) {
		$('.shop_carousel').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $('.shop_slider_navigation'),
			prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
			nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
			responsive: [
			    {
			    	breakpoint: 700,
			    	settings: {
				    	slidesToShow: 2,
				    	slidesToScroll: 1
			    	}
				}
			]

		});
	};

	//Testimonial Slider
	if($('.testimonial_carousel').length) {
		$('.testimonial_carousel').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.testimonial_slider_box'),
			prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			responsive: [
			    {
			    	breakpoint: 500,
			    	settings: {
				    	slidesToShow: 2,
				    	slidesToScroll: 1
			    	}
				}
			]
		});

		$('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  	// console.log(nextSlide);
			var tabs_container = $('.testimonial_tab_container');
			tabs_container.find($('.tab-item')).hide();
			tabs_container.find($('.tab-' + nextSlide)).show();
		});
	};
});
