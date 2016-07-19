$(document).ready(function() {


	$("#toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$("#menu").slideToggle();
		return false;
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    // nav:true,
	    autoplay: true,
	    autoplayTimeout: 4000,
	    autoplaySpeed:1400,
	    pagination:true,
	    dots:true,
	    dotsSpeed: 100,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});



});



