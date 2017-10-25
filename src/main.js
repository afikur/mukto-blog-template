var $ = jQuery;

$(document).ready(function() {
	//article user-image-hover-effect
	$(".article a.user").hover(function() {
		$(".article .user-info").addClass("user-info-active");
	});

	$(".article .user-info").mouseleave(function() {
		$(".article .user-info").removeClass("user-info-active");
	});


	//categories
	var transition_timeout = 40;
	
	$('.title_items').click(function() {
	  
	  current = $(this).next().find('li');
	  
	  $(this).toggleClass('active');
	  current.toggleClass('visible');
	  
	  if ($(this).hasClass('active')) {
	    for( i = 0; i <= current.length; i++ ) {
	      $(current[i]).css('transition-delay', transition_timeout * i + 'ms');
	    }
	  }
	  else {
	    for( i = current.length, j = -1; i >= 0; i--, j++) {
	      $(current[i]).css('transition-delay', transition_timeout * j + 'ms');
	    }
	  }
	
	});

});