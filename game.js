$(document).ready(function(){

var audio1 = new Audio("assets/trynot.mp3");	

	$("#start").on("click", function(){
		$("#start").toggle();
		audio1.play();
	});
	$("img").on('click', function(){
		$("img").toggleClass("displayNone");
	});
	$("button").on('click', function(){
		$("button").toggleClass();
	});
	$("#start").on('click', function(){
		$("img").toggle('slow');
	});
	$("#start").on('click', function(){
		$("#buttons").toggle('slow');
	});	
	$("#start").on('click', function(){
		$("#deadpool_hp").toggle('slow');
	});
	$("#start").on('click', function(){
		$("#zombie_hp").toggle('slow');
	});
	$("#start").on('click', function(){
		$("#dead_hp").toggle('slow');
	});
	$("#start").on('click', function(){
		$("#z_hp").toggle('slow');
	});
});