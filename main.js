//Player object

function Player(name, gender){

	this.name = name;
	this.gender = gender;
	this.score = 0;
}

//Game object

function Game() {
	this.turnCount = 0;

}
// Create Player -- get name,(opt gender)
player1 = new Player();

$('#name-submit').on('click', function(e){
	e.preventDefault();
	player1.name = $('#player-name').val();
	$('#intro').hide();
	console.log(player1.name);
});


var player1 = new Player();

var currentGame = new Game();

// Game.prototype.
// var burnedProblems = [];
var remainingProblems = problems;



//set New Problem for deployment.

function getNewProblem() {
		var remainingSolutions = solutions;
			var min = 0, max = remainingProblems.length -1;
		  var num = Math.floor(Math.random() * (max - min)) + min;
			console.log(remainingProblems[num], num);

			var answer = solutions.filter(function(item) {
				if (item.id === remainingProblems[num].id) {
					return true;
				} else {
					return false;
				}
			});
			console.log(answer);
			console.log(solutions.indexOf(answer[0]));

			var alt1 = solutions.filter(function(item){
				if (item.id === remainingProblems[num].alt[0]) {
					return true;
				}else {
					return false;
				}
			});
			console.log(alt1);
			console.log(solutions.indexOf(alt1[0]));
			var alt2 = solutions.filter(function(item){
				if (item.id === remainingProblems[num].alt[1]) {
					return true;
				}else {
					return false;
				}
			});
			console.log(alt2);
			var problem = remainingProblems[num];
			remainingProblems.splice(num, 1);
			// console.log(remainingProblems.length);
			return problem;

	}






console.log(getNewProblem());



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
