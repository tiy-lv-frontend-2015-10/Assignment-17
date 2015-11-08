$(document).ready(function(){


	// Renders the Opening Splash Page*****************************
	//*************************************************************

	var introData = {
		introData: introText
	};


	var introTemplate = $('#game-intro').text();
	var introHTML = Mustache.render(introTemplate, introData);
	$('#intro').html(introHTML);
//***************************************************************
//***************************************************************
 var startupData = {
	 	name: player1.name,
		text: "We're ready to start the game. Press Play to begin. Good Luck!"
 };

	var startupTemplate = $('#').text();
	var startupHTML = Mustache.render(startupTemplate, startupData);
	$('#game-start').html(startupHTML);


});
