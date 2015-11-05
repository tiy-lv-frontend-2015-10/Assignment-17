$(document).ready(function(){

var Player1 = function () {
  	this.name;
  	this.health = 150;
  	this.attack = function (opponent) {
    var hitAccuracy = Math.random();
    if (hitAccuracy > .2) {
      opponent.health -= 10;
    } else {
      console.log("It's been kind of a rough day");
    }
  };
  	this.specialtyHit = function (opponent) {
    opponent.health -= this.randomCrit();
  };
  	this.randomCrit = function () {
    var max = 25;
    var min = 11;

    return Math.ceil(Math.random() * (max - min) + min);
  }
};
var Enemy1 = function () {
  	this.name;
  	this.health = 100;
  	this.attack = function (opponent) {
    var hitAccuracy = Math.random();
    	if (hitAccuracy > .5) {
      	opponent.health -= 10;
    } else {
      console.log("HA! " + this.name + " missed!!!!");
    }
  };
};

	// var p1 = new Player1();
	// var p2 = new Enemy1();

	// p1.name = "Deadpool";
	// p2.name = "Zombie";

	// 	p1.attack(p2);
	// 	alert(p1.name + " has attacked " + p2.name + " ,now " + p2.health + " health left");
	// 	Player1.prototype.heal = function (player) {
	// 	  player.health += 5;
	// 	}

	// 	p2.attack(p1);
	// 	alert(p2.name + " bit " + p1.name + " now has " + p1.health + " health left");

	// 	p1.heal(p1);
	// 	alert(p1.name + " ate a chimichanga and now has " + p1.health + " health left");



});
