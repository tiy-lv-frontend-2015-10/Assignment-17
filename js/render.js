//
//
//
// 	// Renders the Opening Splash Page*****************************
// 	//*************************************************************
//
// 	var introData = {
// 		introData: introText
// 	};
//
//
// 	var introTemplate = $('#game-intro').text();
// 	var introHTML = Mustache.render(introTemplate, introData);
// 	$('#intro').html(introHTML);
//
// // Render the Game Start Button ***************************************
// //*********************************************************************
//  var startupData = {
// 	 	name: player1.name,
// 		text: "We're ready to start the game. Press Play to begin. Good Luck!"
//  };
//
// 	var startupTemplate = $('#round-start').text();
// 	var startupHTML = Mustache.render(startupTemplate, startupData);
// 	$('#game-start').html(startupHTML);
//
//
// });
//
// function displayTurn(turn) {
// 	var turnData = {
// 		turnData: currentGame.quizSet[turn]
// 	};
// 	var turnTemplate = $('#turn-template').text();
// 	var turnHTML = Mustache.render(turnTemplate, turnData);
// 	$('#gameBoard').html(turnHTML);
// }
