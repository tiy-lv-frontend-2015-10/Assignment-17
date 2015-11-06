$(document).ready(function(){

function Player(name, health, punch, kick, specialtyHit, bite) {
  	this.name;
  	this.health = 150;
  	this.punch = function (opponent) {
    var hitAccuracy = Math.random();
    if (hitAccuracy > .5) {
      opponent.health -= 10;
    } else {
      alert("Seriously " + p2.name + "! Stop moving!");
    }
  };
    this.kick = function (opponent) {
    var hitAccuracy = Math.random();
    if (hitAccuracy > .3) {
      opponent.health -= 15;
    } else {
      alert("DANGIT!");
    }
  };
  	this.specialtyHit = function (opponent) {
    opponent.health -= this.randomCrit();
  };
  	this.randomCrit = function () {
    var max = 30;
    var min = 15;
    return Math.ceil(Math.random() * 10 + min);
  }
};
	var p1 = new Player();
	var p2 = new Player();

	p1.name = "Deadpool";
	p2.name = "Zombie";

	Player.prototype.heal = function (player) {
		player.health += 10;
	}


	$("#punch").on('click', function(){
		$("this.punch").html(alert(p1.name + " punched the crap out of " + p2.name));
	});
	$("#kick").on('click', function(){
		$("this.kick").html(alert(p1.name + " kicked " + p2.name));
	});
	$("#specialty").on('click', function(){
		$("this.specialtyHit").html(alert(p1.name + " did some crazy sweet moves on " + p2.name));
	});
	$("#heal").on('click', function(){
		$("heal").html(alert(p1.name + " ate a delicious Chimichanga and now has " + p1.health + " health left"));
	});
});
