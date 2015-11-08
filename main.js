$(document).ready(function(){


function Player() {
  	this.name;
  	this.health = 150;
  	this.punch = function (opponent) {
	    var hitAccuracy = Math.random();
	    if (hitAccuracy > .4) {
	      opponent.health -= 10;
	    $("#action").append(this.name + " punched the crap out of " + opponent.name + "!!!!" + "<br/>");
	    } else {
	    $("#action").append("Seriously " + opponent.name + "! Stop moving! " + "<br/>");
	    }
  };
    this.kick = function (opponent) {
	    var hitAccuracy = Math.random();
	    if (hitAccuracy > .4) {
	      opponent.health -= 10;
	    $("#action").append(this.name + " dropkicked " + opponent.name + " ! " + "<br/>");
	    } else {
	    $("#action").append("DANGIT! " + this.name + " missed! " + "<br/>");
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

	$("#dead_hp").html(p1.health);
	$("#z_hp").html(p2.health);

	$("#punch").on('click', function(){
		p1.punch(p2);
		p2.punch(p1);
		$("#dead_hp").html(p1.health);
		$("#z_hp").html(p2.health);
		if (p2.health <= 0) {
			alert("You have defeated the" + p2.name + " attack!");
			location.reload();
		} else if (p1.health <=0) {
			alert("GAME OVER! You killed " + p1.name);
			location.reload();
		}
	});
	$("#kick").on('click', function(){
		p1.kick(p2);
		p2.kick(p1);
		$("#dead_hp").html(p1.health);
		$("#z_hp").html(p2.health);
		if (p2.health <= 0) {
			alert("You have defeated the " + p2.name + " attack!");
			location.reload();
		} else if (p1.health <=0) {
			alert("GAME OVER! You killed " + p1.name);
			location.reload();
		}
	});
	$("#specialty").on('click', function(){
		p1.specialtyHit(p2);
		p2.punch(p1);
		$("#dead_hp").html(p1.health);
		$("#z_hp").html(p2.health);
		$("#action").append(p1.name + " did some crazy sweet moves on " + p2.name + " that caused critical damage! " + "<br/>");
		if (p2.health <= 0) {
			alert("You have defeated the " + p2.name + " attack!");
			location.reload();
		} else if (p1.health <=0) {
			alert("GAME OVER! You killed " + p1.name);
			location.reload();
		}
	});
	$("#heal").on('click', function(){
		p1.heal(p1);
		p2.kick(p1);
		$("#dead_hp").html(p1.health);
		$("#z_hp").html(p2.health);
		$("#action").append(p1.name + " ate a delicious Chimichanga to heal himself! " + "<br/>");
	});
});
