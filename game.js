


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


p1.attack(p2);
alert(p2.name + " found his sneakers eaten and has " + p2.sanity + " left");

Player.prototype.attack2 = function attack2 (targetOwner) {
	targetOwner.sanity -= 10;
};

p1.attack2(p2);
alert(p2.name + " has no shoes to wear to school and has " + p2.sanity + " left");

			

Player.prototype.calm = function calm (targetOwner) {
	targetOwner.sanity +=20;
};

p1.calm(p2);
alert(p1.name + " wags his tail and jumps on " + p2.name + "'s lap and " + p2.name + " has " + p2.sanity + " left."); 

	


//	this.puppyAttack2 = function puppyAttack2 (owner) {
//		var puppyAttackChance = Math.random ();
//			if (puppyAttackChance > .3 && puppyAttackChance < .6) {
//			owner.sanityPoints -= 100;
//			alert(p2.name + " carpet is covered with puppy mess and has " + p2.sanityPoints + " left") 
//				} else if (puppyAttackChance > .60) {
//			owner.sanityPoints -= 20;
//			alert(p2.name + " and stepped in it and " + p2.sanityPoints + "left ")
//				} else {
//			alert (p1.name + " was good.");
//}
//};

//		var puppyWagChance = Math.random ();
//			if (puppyWagChance > .4 && puppyWagChance < .7) {
//			owner.sanityPoints += 100;
//			alert(p1.name + " wags his tail and jumps on " + p2.name + "'s lap and " + p2.name " has " + p2.sanityPoints + " left.") 
//				} else if (puppyWagChance > .70) {
//			owner.sanityPoints += 20;
//			alert(p2.name + " gives " + p1.name + " a Benedryl and " p2.name + " has " + p2.sanityPoints + " left.")
//				} else {
//			alert (p1.name + " went to sleep.");
//}
//};





