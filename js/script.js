$(document).ready(function(){

	$(function() {
		// document ready
		$('a.nav').smoothScroll({
			offset: -62,
		});
	});//smooth scroll ends


	//dropdown nav menu
	$('a.dropDown').on('click', function(){
		$('nav ul').slideToggle('slow','swing');
	});//end open nav drop down

});//end document ready



