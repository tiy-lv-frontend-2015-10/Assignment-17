$(document).ready (function() {


function Player () {
   this.sanity = 100;
   this.name = name;
   this.attack = function attack (owner) {
   	    var attackChance = Math.random();
   	    if (attackChance > .5) {
   	    	owner.sanity -= 15;
   		} else {
   			alert(this.name + " was good!");
   		}
   };
}


// Creates the players //
var p1 = new Player();
var p2 = new Player();

p1.name = "Darth Odie";
p2.name = "Jar Jar Binks";

//Creates the attacks //

Player.prototype.attack1 = function attack1 (targetOwner) {
	targetOwner.sanity -=20;
};

p1.attack1(p2);
alert(p2.name + " found his sneakers eaten and has " + p2.sanity + " sanity points left.");

Player.prototype.attack2 = function attack2 (targetOwner) {
	targetOwner.sanity -=15;
};

p1.attack2(p2);
alert(p2.name + " has no shoes to wear to school and has " + p2.sanity + " sanity points left");

Player.prototype.attack3 = function attack3 (targetOwner) {
	targetOwner.sanity -=20;
};

p1.attack3(p2);
alert(p1.name + " has made a big smelly mess on the carpet and " + p2.name + " has " + p2.sanity + " sanity points left.");

Player.prototype.attack4 = function attack4 (targetOwner) {
	targetOwner.sanity -=15;
};

p1.attack4(p2);
alert(p1.name + " has dug up the garden and uncovered the Sarlaac and " + p2.name + " has " + p2.sanity + " sanity points left, and gives " + p1.name + " a Benadryl and has some alcohol.");

//Creates the good stuff //

Player.prototype.calm = function calm (targetOwner) {
	targetOwner.sanity +=20;
};

p1.calm(p2);
alert(p1.name + " wags his tail and jumps on " + p2.name + "' lap and " + p2.name + " has " + p2.sanity + " sanity points left."); 

Player.prototype.cuddle = function cuddle (targetOwner) {
	targetOwner.sanity +=25;
};

p1.cuddle(p2);
alert(p1.name + " cuddles up to " + p2.name + " and " + p2.name + "' blood pressure drops and he has " + p2.sanity + " sanity points left.");

//Adds the DOM Events

document.getElementbyID('attack1Button').addEventListener("click", function(){alert(p2.name + " found his sneakers eaten and has " + p2.sanity + " sanity points left.");})


});




