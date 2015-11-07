$(document).ready(function(){

function Player() {
  	this.name;
  	this.health = 150;
  	this.punch = function (opponent) {
	    var hitAccuracy = Math.random();
	    if (hitAccuracy > .5) {
	      opponent.health -= 10;
	    } else {
	      alert("Seriously " + opponent.name + "! Stop moving!");
	    }
  };
    this.kick = function (opponent) {
	    var hitAccuracy = Math.random();
	    if (hitAccuracy > .5) {
	      opponent.health -= 10;
	    } else {
	      alert("DANGIT!");
	    }
  };
  	this.specialtyHit = function (opponent) {
    opponent.health -= this.critDamage();
  };
  	this.critDamage = function () {
	    var max = 30;
	    var min = 15;
	    return Math.ceil(Math.random() * (max - min) + min);
	  }
};
	var p1 = new Player();
	var p2 = new Player();

	p1.name = "Deadpool";
	p2.name = "Zombie";

	Player.prototype.heal = function (player) {
		player.health += 5;
	}


	$("#punch").on('click', function(){
		p1.punch(p2);
		$("#punch").html(alert(p1.name + " punched the crap out of " + p2.name + " and now has " + p2.health + " health left"));
	});
	$("#kick").on('click', function(){
		p1.kick(p2);
		$("#kick").html(alert(p1.name + " dropkicked " + p2.name + " now " + p2.name + " has " + p2.health + " health left"));
	});
	$("#specialty").on('click', function(){
		p1.specialtyHit(p2);
		$("this.specialtyHit").html(alert(p1.name + " did some crazy sweet moves on " + p2.name + " that caused critical damage!" + p2.name + " has " + p2.health + " health left"));
	});
	$("#heal").on('click', function(){
		p1.heal(p1);
		$("heal").html(alert(p1.name + " ate a delicious Chimichanga to heal himself and now has " + p1.health + " health left"));
	});
});
