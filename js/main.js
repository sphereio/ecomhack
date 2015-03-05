// Hiding hamburger menu on click

$('.nav a').on('click', function(){
     $(".navbar-toggle").click() 
});

$(function(){


	$(window).load(function() {
		$(".loader").delay(500).fadeOut("slow");
	})

	$window = $(window);
	if( $window .width() > 800){
		$('.parallax-scroll1').parallax("50%", 0.5);
		$('.parallax-scroll2').parallax("50%", 0.5);
		$('.parallax-scroll3').parallax("50%", 0.5);
		$('.parallax-scroll4').parallax("50%", 0.5);
		$('.parallax-scroll5').parallax("50%", 0.5);
	}


	$('.main-navigation').onePageNav({

		filter: ':not(.external)',
	    currentClass: 'current',
		scrollOffset: 85,
	    scrollSpeed: 1000,
	    scrollThreshold: 0.5 ,
	    easing: 'easeInOutExpo'

	});

	wow = new WOW(
	    {
	      boxClass:     'wow',      // default
	      animateClass: 'animated', // default
	      offset:       0,          // default
	      mobile:       false,       // default
	      live:         true        // default
	    }
	);

	wow.init();

	//--- fixed header on scroll
	var test = 0;

	var $navbar = $('.navbar');
	var $white_logo_img = $('.white-logo-img');
	var $dark_logo_img = $('.dark-logo-img');

	function scrolled(test){

		if(test === 0){
			$navbar.stop().addClass("sticky-navbar");
			$white_logo_img.fadeOut();
			$dark_logo_img.fadeIn();
		}else{
			$navbar.stop().removeClass("sticky-navbar");
			$dark_logo_img.fadeOut();
			$white_logo_img.fadeIn();
		}
	}

	if($(window).scrollTop() > 50){
		scrolled(test);
	}

	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
	    	if(test===0){
	    		scrolled(test);
	    	}
	    	test=1;
	    } else {
	    	if(test===1){
	        	scrolled(test);
	        }
	        test = 0;
	    }
	});
	//--- end scroll

	$('.curved-text').circleType({radius:200});

	$('.video-link').magnificPopup({
		type : 'iframe',
		closeBtnInside : false,
		mainClass: 'mfp-fade',
		removalDelay: 160
	});

	$("#features-slider").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
	});

	$("#team-slider").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [996,2],
		itemsTablet: [600,1],
		itemsMobile : false
	});

	$("#gallery-slider").owlCarousel({
		singleItem: true,
		slideSpeed : 400,
		navigation : true,
		pagination: false,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});

	$("#testi-slider").owlCarousel({
		singleItem: true,
		slideSpeed : 400
	});

	$('#plan-select').selectpicker();

});