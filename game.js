$(document).ready(function(){

	$("img").on('click', function(){
		$("img").toggleClass("displayNone");
	});
	$("button").on('click', function(){
		$("button").toggleClass();
	});
	$("span").on('click', function(){
		$("span").toggleClass();
	});
	$("#start").on('click', function(){
		$("img").toggle('slow');
	});
	$("#start").on('click', function(){
		$("#buttons").toggle('slow');
	});
	$("#start").on('click', function(){
		$(".health_bar").toggle('slow');
	});
	
});