// document ready
$(function(){
	// about-link
	$('#about-link').click(function(){
		$('#about-div').show();
		console.log("About page shown");

		// hide the rest of the partials
		$('#home-div').hide();
		$('#contact-div').hide();
		$('#portfolio-div').hide();
	});

	// contact-link
	$('#contact-link').click(function(){
		$('#contact-div').show();
		console.log("Contact page shown");

		// hide the rest of the partials
		$('#home-div').hide();
		$('#about-div').hide();
		$('#portfolio-div').hide();
	});

	// portfolio-link
	$('#portfolio-link').click(function(){
		$('#portfolio-div').show();
		console.log("Portfolio page shown");

		// hide the rest of the partials
		$('#home-div').hide();
		$('#contact-div').hide();
		$('#about-div').hide();
	});

	// home-link
	$('#home-link').click(function(){
		$('#home-div').show();
		console.log("Portfolio page shown");

		// hide the rest of the partials
		$('#portfolio-div').hide();
		$('#contact-div').hide();
		$('#about-div').hide();
	});
});