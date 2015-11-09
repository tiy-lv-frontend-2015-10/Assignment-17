$(document).ready(function(){

$('#intro').fadeIn(1500);
$('game-start').fadeIn(2500);

//Player object
function Player(){
	this.name = '';
	// this.gender = gender;
	this.score = 0;
}
//Game object
function Game() {
	this.turnCount = 0;
}

// function Question() {
// 	this.currentProblem = {};
// 	this.remainingAnswers = solutions;
//
// }
// Create Player -- get name,(opt gender)
var currentPlayer = new Player();
currentPlayer.name = "Herkimer";
Game.prototype.quizSet = [];

//set New Problem for deployment.

function getNewGameSet() {
	var remainingProblems = problems;
	var gameSet = [];
		for (var i = 1; i < 11; i++) {
			var psBundle = [];
			var currentProblem = {};
			var currentProblemSolutions = [];
			var min = 1, max = remainingProblems.length -1;
		  var probNum = Math.ceil(Math.random() * (max - min)) + min;
			currentProblem = remainingProblems[probNum];
			currentProblemSolutions = getSolutions(currentProblem);
			psBundle.push(currentProblem);
			psBundle.push(currentProblemSolutions);
			gameSet.push(psBundle);
			remainingProblems.splice(remainingProblems.indexOf(currentProblem), 1);
		}
		return gameSet;
	}


	// console.log(currentGame.quizSet);
	// console.log(currentGame.quizSet[0][1][5]);

//**Find Main Solution (for currentProblem), + Alternates 1 & 2 *************
//***************************************************************************
function getSolutions(problem) {
		var remainingSolutions = solutions;
		var top3 = [];
			// get 'answer' **************************************
			var answer = solutions.filter(function(item) {
						if (item.id === problem.id) {
							return true;
						} else {
							return false;
						}
					});
			top3.push(answer[0]);

			remainingSolutions.splice((remainingSolutions.indexOf(answer[0])), 1);

			// get Alernate 1 **************************************************
			var alt1 = solutions.filter(function(item){
						if (item.id === problem.alt1) {
							return true;
						}else {
							return false;
						}
					});
			top3.push(alt1[0]);

			remainingSolutions.splice((remainingSolutions.indexOf(alt1[0])), 1);

			// get Alternate 2  ******************************************
			var alt2 = solutions.filter(function(item){
						if (item.id === problem.alt2) {
							return true;
						}else {
							return false;
						}
					});
			top3.push(alt2[0]);
			remainingSolutions.splice((remainingSolutions.indexOf(alt2[0])), 1);

//****** Generate 3 more random (unrelated-filler) solutions to fill array of 6
//***********************************************************************
		var next3 = [];

			for (var i = 1; i < 4; i++) {
				var currentSolution = {};
				var min = 1, max = remainingSolutions.length -1;
			  var solutionNum = Math.ceil(Math.random() * (max - min)) + min;
				// console.log(solutionNum);
				currentSolution = remainingSolutions[solutionNum];
				// console.log(currentSolution);
				next3.push(currentSolution);
				remainingSolutions.splice(remainingSolutions.indexOf(currentSolution), 1);
			}
	// Wrap it all in one array of objects ************************************
		var qPanel = top3.concat(next3);
	// OK, now MIX THEM UP so the answer isn't the top left every time
	//****************************************************
		var sortedSolutions = qPanel.sort(function(a,b){
 	 	if (a.id > b.id) {
 	 		return 1;
 	 	}
 	 	if (a.id < b.id) {
 	 	 return -1;
 	  }
 	// a must be equal to b
 	  return 0;
 	 });
		return sortedSolutions;
	}// End of function getSolutions........

var currentGame = new Game();

function playGame() {
	var count = currentGame.turnCount;
	currentGame.quizSet = getNewGameSet();
	console.log(currentGame.quizSet);
	if (count < 10) {
		displayTurn(count);
		var turnVal = executeTurn(currentGame.quizSet[count]);
		// displayResult(currentGame.quizSet[i], turnVal);
		// $('#next-turn').click(function(e){
		// 	e.preventDefault();
		// });
	}


}


function executeTurn(set) {
	var turnScore = 0;
	$('.choice-button').click(function(e){
		e.preventDefault();
		var ch =	$(this).prop('id').substr(1,1);
		var chN = Number(ch);
		var thisChoice = set[1][chN];
			if (thisChoice.id === set[0].id) {
				turnScore = 10;
			}else if (thisChoice.id === set[0].alt1){
				turnScore = 5;
			}else if (thisChoice.id === set[0].alt2){
				turnScore = 3;
			}else {
				turnScore = 0;
			}
			return turnScore;
	});
	console.log(turnScore);

}

//*******  ACTIONS *************************************************************
//******************************************************************************
// console.log(currentPlayer.name);
/// ***** Enter Player Name **********************************

// $('#name-submit').on('click', function(e){
// 	e.preventDefault();
// 	currentPlayer.name = $('#player-name').val();
//
// 	$('#game-start').show(1000);
// });
// console.log(currentPlayer.name);
// Renders the Opening Splash Page*****************************
//*************************************************************

// var introData = {
// 	introData: introText
// };
//
// var introTemplate = $('#game-intro').text();
// var introHTML = Mustache.render(introTemplate, introData);
// $('#intro').html(introHTML);

// Render the Game Start Button ***************************************
//*********************************************************************
var startupData = {
	name: currentPlayer.name,
	text: "We're ready to start the game. Press Play to begin. Good Luck!"
};

var startupTemplate = $('#round-start').text();
var startupHTML = Mustache.render(startupTemplate, startupData);
$('#game-start').html(startupHTML);

// Start the Game ********************************************
$('#startTheGame').on('click', function(e){
	e.preventDefault();
		$('#intro').toggle('puff', 800);
		$('#game-start').fadeOut(100);
		playGame();
});


// Render a Turn ******************************************************
//*********************************************************************

function displayTurn(turn) {
	var dat = currentGame.quizSet[turn];
var turnData = {
  problem: dat[0],
	s1: dat[1][0],
	s2: dat[1][1],
	s3: dat[1][2],
	s4: dat[1][3],
	s5: dat[1][4],
	s6: dat[1][5]
 };

console.log(turnData);
console.log(turnData.problem);
var turnTemplate = $('#turn-template').text();
var turnHTML = Mustache.render(turnTemplate, turnData);
$('#turnBoard').html(turnHTML).fadeIn(4000);
}

});
