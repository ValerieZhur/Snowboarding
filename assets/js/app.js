
$(function(){

	/* Smooth scroll*/

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active").addClass("hide");

			

		$("html, body").animate({

			scrollTop: blockOffset
		}, 1000);
	});

	/* Menu nav toggle */

		$("#nav_toggle").on("click", function(event){
			event.preventDefault();

			$(this).toggleClass("active");
			$("#nav").toggleClass("active");
		});

        $(".nav_link").on("click", function(event){
            $("#nav").removeClass("active");
            $("#nav_toggle").removeClass("active");
        });

	/* Collapse */

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("collapse");

		$(blockId).slideToggle();
		$this.toggleClass("active");

	});

	// carousel

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			dots: false,
			autoplay: true,
			autoplaySpeed: 2000,
			loop: true
		});
	});

// Slider 

	$('[data-slider]').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});



});