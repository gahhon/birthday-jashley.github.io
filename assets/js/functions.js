
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  storyImage = jQuery('#story').data('background-image');
var  birthdayImage = jQuery('#birthday').data('background-image');
var  photoImage = jQuery('#photo').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (storyImage) {  jQuery('#story').css({ 'background-image':'url(' + storyImage + ')' }); };
if (birthdayImage) {  jQuery('#birthday').css({ 'background-image':'url(' + birthdayImage + ')' }); };
if (photoImage) {  jQuery('#photo').css({ 'background-image':'url(' + photoImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {
	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/


    
	/* Main Menu   
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});  

	/* Main Menu End  
	-------------------------------------------------------------------*/




	/* Time Countdown 
	-------------------------------------------------------------------*/
	$('#time_countdown').countDown({
        
        targetDate: {
            'day': 14,
            'month': 7,
            'year': 2019,
            'hour': 0,
            'min': 0,
            'sec': 0
        },
        omitWeeks: true

         // targetOffset: {
            // 'day':      0,
            // 'month':    0,
            // 'year':     1,
            // 'hour':     0,
            // 'min':      0,
            // 'sec':      3
		// },
		// omitWeeks: true

	    });



	/* Next Section   
	-------------------------------------------------------------------*/
		$('.next-section .go-to-about').click(function() {
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
		$('.next-section .go-to-story').click(function() {
    	$('html,body').animate({scrollTop:$('#story').offset().top}, 1000);
	});
		$('.next-section .go-to-birthday').click(function() {
		$('html,body').animate({scrollTop:$('#birthday').offset().top}, 1000);
  	});
	  	$('.next-section .go-to-photo').click(function() {
    	$('html,body').animate({scrollTop:$('#photo').offset().top}, 1000);
  	});
		$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});

  	/* Next Section End
	-------------------------------------------------------------------*/
});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
