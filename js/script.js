$(document).ready(function(){

	$(function() {
		// document ready
		$('a.nav').smoothScroll({
			offset: -62,
		});
	});//smooth scroll ends


	//dropdown nav menu
	$('a.dropDown').on('click', function(e){
		e.preventDefault();
		var href = $('nav ul');
		href.toggleClass('visible');
	});//end open nav drop down

});//end document ready
