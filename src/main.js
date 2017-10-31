var $ = jQuery;

$(document).ready(function() {
	//article user-image-hover-effect
	if($(window).width() >= 1170) {
		$(".article a.user").click(function(event) {
			event.preventDefault();
		});
		
		$(".article a.user").hover(function() {
			console.log($(this).siblings(".user-info"));
			$(this).siblings(".user-info").addClass("user-info-active");
		});

		$(".article .user-info").mouseleave(function() {
			$(this).removeClass("user-info-active");
		});
	} else {
		$(".article a.user").click(function(event) {
			event.preventDefault();
			$(this).siblings(".article .user-info").toggleClass("user-info-active");
		});
	}

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