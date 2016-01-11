// document ready
$(function(){

	// check resize
	$( window ).resize(function() {
		var width = $(window).width();
		if(width < 415){
			$("#links-div-normal").hide();
			$("#small-image-div-offset").removeClass("col-xs-offset-4");
			$("#small-image-div-offset").addClass("col-xs-offset-3");
			$("#links-div-small").show();

		}
		else if(width > 415 && width < 650){
			$("#links-div-normal").hide();
			$("#small-image-div-offset").removeClass("col-xs-offset-3");
			$("#small-image-div-offset").addClass("col-xs-offset-4");
			$("#links-div-small").show();
		}
		else if(width > 650){
			$("#links-div-small").hide();
			$("#links-div-normal").show();
		}
	});

	// fade in profile picture
	$("#home-div").fadeIn(3000, function(){
		var width = $(window).width();
		$(".fade-in-after-profile").fadeIn(500);
		if(width > 650){
			console.log("Width size, ok to show contact links");
			$("#links-div-normal").fadeIn(500);
		}
		else if(width < 650 && width > 415){
			$("#links-div-small").fadeIn(500);
		}
		else if(width < 415){
			// need to adjust offset for screens less than 415
			$("#small-image-div-offset").removeClass("col-xs-offset-4");
			$("#small-image-div-offset").addClass("col-xs-offset-3");
			$("#links-div-small").fadeIn(500);
		}
	});

    $(".large-image")
        .mouseover(function() {
        	var src = $(this).attr("src").match(/[^\.]+/) + "-alt.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
        	var src = $(this).attr("src").replace("-alt.png", ".png");
            $(this).attr("src", src);
        });

});