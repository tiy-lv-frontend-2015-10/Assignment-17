$(document).ready(function(){

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

var currentGame = new Game();
var currentPlayer = new Player();
currentPlayer.name = "Herkimer";
Game.prototype.quizSet = [];
Game.prototype.problemsLeft = [];
currentGame.problemsLeft = problems;

//set New Problem for deployment.
function getNewTurnSet() {
			var pLeft = currentGame.problemsLeft;
			var psBundle = [];
			var turnSet = [];
			var currentProblem = {};
			var currentProblemSolutions = [];
			var min = 1, max = pLeft.length -1;
		  var probNum = Math.ceil(Math.random() * (max - min)) + min;
			currentProblem = pLeft[probNum];
			currentProblemSolutions = getSolutions(currentProblem);
			psBundle.push(currentProblem);
			psBundle.push(currentProblemSolutions);
			turnSet.push(psBundle);
			pLeft.splice(pLeft.indexOf(currentProblem), 1);
			return turnSet;
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




		function playTurn(){
			var count = currentGame.turnCount;
			if (count < 10) {
			var thisTurnSet = getNewTurnSet();
				displayTurn(thisTurnSet);
			$('.choice-button').on('click', function(e){
				e.preventDefault();
				var turnScore = 0;
				var thisChoice = $(this).data('sid');
					if (thisChoice && thisChoice === thisTurnSet[0].id) {
						turnScore = 10;
					}else if (thisChoice && thisChoice === thisTurnSet[0].alt1){
						turnScore = 5;
					}else if (thisChoice && thisChoice === thisTurnSet[0].alt2){
						turnScore = 3;
					}else {
						turnScore = 0;
					}
					renderScore(turnScore, thisTurnSet[count], thisChoice);
			});
		}
	}


		function renderScore(turnScore, thisSet, thisAnswer) {
			currentGame.turnCount += 1;
			currentPlayer.score += turnScore;
			var remaining = 10 - currentGame.turnCount;
			var turnEndData = {
				score: turnScore,
				image: thisSet[0].image,
				name: thisSet[0].name,
				guess: thisAnswer.name,
				player: currentPlayer.name,
				total: currentPlayer.score,
				left: remaining
			};
			var turnEndingTemplate = $('#turnEnd').text();
			var turnEndHTML = Mustache.render(turnEndingTemplate, turnEndData);

			$('#gameBoard').toggle('puff', 1000);
			$('#resultBoard').html(turnEndHTML);
			$('#nextTurn').on('click', function(e){
				e.preventDefault();
				$('#resultBoard').toggle('puff', 1000);
				playTurn();
			});
		}

		function endGame(){
			console.log(currentPlayer.score);
			console.log('bye');
		}




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
		playTurn();
});


// Render a Turn ******************************************************
//*********************************************************************

function displayTurn(turnSet) {
	var dat = turnSet;
	console.log(dat);
var turnData = {
  problem: dat[0][0],

	s0: dat[0][1][0],
	s1: dat[0][1][1],
	s2: dat[0][1][2],
	s3: dat[0][1][3],
	s4: dat[0][1][4],
	s5: dat[0][1][5],
	count: currentGame.turnCount + 1
 };

var turnTemplate = $('#turn-template').text();
var turnHTML = Mustache.render(turnTemplate, turnData);
$('#gameBoard').html(turnHTML).fadeIn(4000);
}

});
