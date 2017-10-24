$(document).ready(function() {
	$(".article a.user").hover(function() {
		$(".article .user-info").addClass("user-info-active");
	});

	$(".article .user-info").mouseleave(function() {
		$(".article .user-info").removeClass("user-info-active");
	});
});