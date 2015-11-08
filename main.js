//Player object

function Player(){

	this.name = '';
	// this.gender = gender;
	this.score = 0;
}

//Game object

function Game() {
	this.turnCount = 10;

}

function Question() {
	this.currentProblem = {};
	this.remainingAnswers = solutions;

}
// Create Player -- get name,(opt gender)
player1 = new Player();

$('#name-submit').on('click', function(e){
	e.preventDefault();
	player1.name = $('#player-name').val();
	$('#intro').fadeOut();
	console.log(player1.name);
});

var player1 = new Player();

var currentGame = new Game();



 Game.prototype.problemSet = [];



//set New Problem for deployment.

function getNewProblems() {
	var remainingProblems = problems;
	var qSet = [];
		for (var i = 1; i < 11; i++) {
			var currentProblem = {};
			var min = 1, max = remainingProblems.length -1;
		  var probNum = Math.ceil(Math.random() * (max - min)) + min;
			currentProblem = remainingProblems[probNum];
			qSet.push(currentProblem);
			remainingProblems.splice(remainingProblems.indexOf(currentProblem), 1);
		}
		return qSet;
	}

	currentGame.problemSet = getNewProblems();
	console.log(currentGame.problemSet[0]);

//Solution selection logic, based on generated problem.......
function getSolutions(problem) {
		var remainingSolutions = solutions;
		var top3 = [];

			var answer = solutions.filter(function(item) {
						if (item.id === problem.id) {
							return true;
						} else {
							return false;
						}
					});
			top3.push(answer[0]);

			remainingSolutions.splice((remainingSolutions.indexOf(answer[0])), 1);
			// console.log(remainingSolutions[4]);
			// **************************************************
			var alt1 = solutions.filter(function(item){
						if (item.id === problem.alt[0]) {
							return true;
						}else {
							return false;
						}
					});
			top3.push(alt1[0]);

			remainingSolutions.splice((remainingSolutions.indexOf(alt1[0])), 1);

			// ******************************************
			var alt2 = solutions.filter(function(item){
						if (item.id === problem.alt[1]) {
							return true;
						}else {
							return false;
						}
					});
			top3.push(alt2[0]);
			remainingSolutions.splice((remainingSolutions.indexOf(alt2[0])), 1);






		console.log(top3[0]);
		console.log(top3[1]);
		console.log(top3[2]);
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

		console.log(next3[0]);
		console.log(next3[1]);
		console.log(next3[2]);
		var qPanel = top3.concat(next3);
		return qPanel;
	}

	var theseSolutions = getSolutions(currentGame.problemSet[0]);

	// console.log(theseSolutions[0].id);
	// var sortedSolutions = theseSolutions.sort(function(a,b){
	// 	if (a.name > b.name) {
	// 		return 1;
	// 	}
	// 	if (a.name < b.name) {
	// 	 return -1;
	//  }
	//  // a must be equal to b
	//  return 0;
	// });

	// console.log(sortedSolutions);
	console.log(theseSolutions);
	// console.log(theseSolutions[0][0]);
	// console.log(theseSolutions[1][0]);
	// console.log(theseSolutions[2][0]);
	// console.log(theseSolutions[3]);
	// console.log(theseSolutions[4]);
	// console.log(theseSolutions[5]);


	//
	// 		var top6 = [];
	//
	// 		top6.push(answer);
	// 		remainingSolutions.splice(answer, 1);
	//
	//
	// 		top6.push(alt1);
	// 		remainingSolutions.splice(alt1, 1);
	//
	// 		var alt2 = solutions.filter(function(item){
	// 			if (item.id === remainingProblems[probNum].alt[1]) {
	// 				return true;
	// 			}else {
	// 				return false;
	// 			}
	// 		});
	// 		top6.push(alt2);
	// 		remainingSolutions.splice(alt2, 1);
	//
	// 		// var pickMore = function() {
	// 		// 	for (var i = 0; i < 3; i++) {
	// 		// 	var min = 0, max = remainingSolutions.length -1;
	// 		// 	var nextNum = Math.floor(Math.random() * (max - min)) + min;
	// 		// 	top6.push(remainingSolutions[nextNum]);
	// 		// 	console.log(remainingProblems[nextNum]);
	// 		// 	remainingSolutions.splice(nextNum, 1);
	// 		// }
	// 	// }
	//
	// 		// var currentProblem = remainingProblems[probNum];
	// 		// remainingProblems.splice(probNum, 1);
	// 		// console.log(remainingProblems.count);
	// 		// currentGame.turncount -= 1;
	// 		// // return currentProblem;
	//
	// }





//check to see if problem has already been chosen, reject if so



//template for game-start-text <div>

// var startTheGame = {
//
// 					name: player1.name
// 				};
//
// var startGameTemplate = $("#game-start").text();
// var gameStartHTML = Mustache.render(startGameTemplate, startTheGame);
// $("#game-start-text").html(appetizerHTML);
//**************************

//
// 		1. Each turn -- newProblem.id = Math.ceil(Math.random [range function].
// 		2. loop over burnedProblems and repeat problemChoice until one with no match in burnedProblems is found
// 		3. burnedProblems.push(thisProblem.id);
// 		turns += 1;
// 		4. return thisProblem;
//
//
// getNewProblemID(1, problems.length);
//
//


// B.
// [
// 		var burnedSolutions = [];
// 		var mainSolution = solution.find by thisProblem.id
// 		burnedSolutions.push(mainSolution.id);
// 		var alt 1 = thisProblem.alt[0]; (pseudo)
// 		burnedSolutions.push(alt1.id);
// 		set alt 2 = thisProblem.alt[1];
// 		burnedSolutions.push(alt2.id);
// 		currentTurnSolutions = burnedSolutions;
// 		Pick 3 more random solutions (!== to ones already picked).
// 		currentTurnSolutions.push(pickedSolution.id); X 3
//
// 		render currentTurnSolutions with Mustache
// ]
//
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
