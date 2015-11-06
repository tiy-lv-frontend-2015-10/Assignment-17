var attack1but = document.querySelector("#attack1Button");
var attack1but = document.querySelector("#attack2Button");
var attack1but = document.querySelector("#attack3Button");
var attack1but = document.querySelector("#attack4Button");
var attack1but = document.querySelector("#attack5Button");
var attack1but = document.querySelector("#attack6Button");
var attack1but = document.querySelector("#attack7Button");

var heal1but = document.querySelector("#heal1Button");
var heal1but = document.querySelector("#heal2Button");
var heal1but = document.querySelector("#heal3Button");
var heal1but = document.querySelector("#heal4Button");
var heal1but = document.querySelector("#heal5Button");
var heal1but = document.querySelector("#heal6Button");
var heal1but = document.querySelector("#heal7Button");

var Player = function(Player) {
   this.sanity = 100;
   this.name = name;
   this.attack = function attack (targetOwner) {
 //  	    var attackChance = Math.random();
 //  	    if (attackChance > .5) {
 // 	    	owner.sanity -= 15;
 //  		} else {
 //  			alert(this.name + " was good!");
 //  		}
   };
}


// Creates the players //
var p1 = new Player();
var p2 = new Player();

p1.name = "Darth Odie";
p2.name = "Jar Jar Binks";


//Creates the attacks //

Player.prototype.attack1 = function attack1 (targetOwner) {
	targetOwner.sanity -= 20;
};

p1.attack1(p2);

Player.prototype.attack2 = function attack2 (targetOwner) {
	targetOwner.sanity -= 15;
};

p1.attack2(p2);

Player.prototype.attack3 = function attack3 (targetOwner) {
	targetOwner.sanity -= 20;
};

p1.attack3(p2);

Player.prototype.attack4 = function attack4 (targetOwner) {
	targetOwner.sanity -= 15;
};

p1.attack4(p2);

Player.prototype.attack5 = function attack5 (targetOwner) {
	targetOwner.sanity -= 10;
};

p1.attack5(p2);

Player.prototype.attack6 = function attack6 (targetOwner) {
	targetOwner.sanity -= 10;
};

p1.attack6(p2);

Player.prototype.attack7 = function attack7 (targetOwner) {
	targetOwner.sanity -= 0;
};

p1.attack7(p2);


//Creates the heals //

Player.prototype.heal1 = function heal1 (targetOwner) {
	targetOwner.sanity += 20;
};

p1.heal1(p2);

Player.prototype.heal2 = function heal2 (targetOwner) {
	targetOwner.sanity += 15;
};

p1.heal2(p2);

Player.prototype.heal3 = function heal3 (targetOwner) {
	targetOwner.sanity += 20;
};

p1.heal3(p2);

Player.prototype.heal4 = function heal4 (targetOwner) {
	targetOwner.sanity += 50;
};

p1.heal4(p2);

Player.prototype.heal5 = function heal5 (targetOwner) {
	targetOwner.sanity += 5;
};

p1.heal5(p2);

Player.prototype.heal6 = function heal6 (targetOwner) {
	targetOwner.sanity += 20;
};

p1.heal6(p2);

Player.prototype.heal7 = function heal7 (targetOwner) {
	targetOwner.sanity += 15;
};

p1.heal7(p2);




//Adds the DOM Events

//Attack Buttons

attack1Button.addEventListener("click", function(e){
	p1.attack1(p2);
	alert(p2.name + " found his sneakers eaten and has " + p2.sanity + " sanity points left.");
})

attack2Button.addEventListener("click", function(e) {
	p1.attack2(p2);
	alert(p2.name + " has no shoes to wear to school and has " + p2.sanity + " sanity points left");})

attack3Button.addEventListener("click", function(e){
	p1.attack3(p2);
	alert(p1.name + " has made a big smelly mess on the carpet and " + p2.name + " has " + p2.sanity + " sanity points left.");})

attack4Button.addEventListener("click", function(e){
	p1.attack4(p2);
	alert(p1.name + " has dug up the garden and uncovered the Sarlaac and " + p2.name + " has " + p2.sanity + " sanity points left, and gives " + p1.name + " a Benadryl and has some alcohol.");})

attack5Button.addEventListener("click", function(e){
	p1.attack5(p2);
	alert(p1.name + " chased the neighboring Ewoks down the street to " + p2.name + "'s dismay. " + p2.name + " has " + p2.sanity + " sanity points left.");})

attack6Button.addEventListener("click", function(e){
	p1.attack6(p2);
	alert(p1.name + " chewed off C3PO's leg and buried it in the yard, and lifted his leg on R2D2. " + p2.name + " has " + p2.sanity + " sanity points left.");})

attack7Button.addEventListener("click", function(e){
	p1.attack7(p2);
	alert(p2.name + " took " + p1.name + " obedience class and his incessant barking gave him a migrane. " + p2.name + " has " + p2.sanity + " sanity points left.");})

//Heal Buttons

heal1Button.addEventListener("click", function(e){
	p1.heal1(p2);
	alert(p1.name + " wags his tail and jumps on " + p2.name + "' lap and " + p2.name + " has his sanity points rise to " + + p2.sanity + ".");})

heal2Button.addEventListener("click", function(e){
	p1.heal2(p2);
	alert(p1.name + " cuddles up to " + p2.name + " and " + p2.name + "' blood pressure drops and he now has " + p2.sanity + " sanity points.");})

heal3Button.addEventListener("click", function(e){
	p1.heal3(p2);
	alert(p1.name + " displays his impossibly cute face and " + p2.name + " says awwwww and increases hi sanity points to " + p2.sanity + ".");})

heal4Button.addEventListener("click", function(e){
	p1.heal4(p2);
	alert(p1.name + " sits when  " + p2.name + " asks him to and  " + p2.name + " is relieve and feels his sanity return to  " + p2.sanity + ".");})

heal5Button.addEventListener("click", function(e){
	p1.heal5(p2);
	alert(p1.name + " finally goes to sleep and " + p2.name + " takes a nap with him. " + p2.name + " has his sanity points rise to " + p2.sanity + ".");})

heal6Button.addEventListener("click", function(e){
	p1.heal6(p2);
	alert(p1.name + " kisses " + p2.name + " on the snout and " + p2.name + " feels his sanity rise to " + p2.sanity + ".");})

heal7Button.addEventListener("click", function(e){
	p1.heal7(p2);
	alert(p1.name + " does some tricks for " + p2.name + " and his sanity rises to " + p2.sanity + ".");})


//Adds Reset Button

Player.prototype.reset = function reset (targetOwner) {
	targetOwner.sanity = 100;
};

p2.reset(p1);

resetButton.addEventListener("click", function(e){
	p2.reset(p1);
	alert(p2.name + " has regained full sanity.");})


