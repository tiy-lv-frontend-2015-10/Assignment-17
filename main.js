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

function Question() {
	this.currentProblem = {};
	this.remainingAnswers = solutions;

}
// Create Player -- get name,(opt gender)




var player1 = new Player();





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


	console.log(currentGame.quizSet);
	console.log(currentGame.quizSet[0][1][5]);

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

//****** Generate 3 more random (incorrect) solutions to fill array of 6
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
	// OK, now mix them up ****************************************************
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


function playGame() {
var currentGame = new Game();
currentGame.quizSet = getNewGameSet();
	for (var i = 1; i < 11; i++) {
		currentGame.turnCount += 1;
		displayTurn(i);
		var turnVal = executeTurn(currentGame.quizSet[i]);
		displayResult(currentGame.quizSet[i], turnVal);
		$('#next-turn').click(function(e){
			e.preventDefault();
		});
	}
}

function executeTurn(set) {
	$('.choice-button').click(function(e){
		e.preventDefault();
		var ch =	$(this).prop('id').substr(1,1);
		var chN = Number(ch);
		var thisChoice = set[1][chN];
		var turnScore = 0;
			if (thisChoice.id === set[0].id) {
				turnScore = 10;
			}else if (thisChoice.id === set[0].alt1){
				turnScore = 5;
			}else if (thisChoice.id === set[0].alt2){
				turnScore = 3;
			}else {
				turnScore = 0;
			}
	});
	return turnScore;
}







// C. [
// 		onClick, store userPick;
// 		if userPick = mainSolution {this.score += 10;}
// 		else if userPick.id == alt1.id {this.score += 5;}
// 		else if userPick.id ===alt2.id {this.score += 3;}
// 		else {this.score += 0;}
// 		toggle display to show image & title
// 		display turn score, total score.
//
// 		if turns === 10 {"Game Over" , displayTotalScore, "Good game (yada yada)"};
// 		else {
// 			onClick (next button) next turn.
// 			}
// ]
