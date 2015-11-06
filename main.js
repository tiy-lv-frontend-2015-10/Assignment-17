$(document).ready(function() {

function minMax(min, max) {
  return Math.floor(Math.random()*max);
}

function Player() {
  this.name;
  this.streetCred = 100;
  this.flow = function(opponent) {
    var flowChance = Math.random();
    if (flowChance > .4) {
      $('.credPoints').html(opponent.streetCred -= minMax(1, 11));
      $('.credPoints2').html(opponent.streetCred -= minMax(1, 11));
    } else {
      $('#description').html("YO!! the flow is weak in " + this.name + "." + " Next players turn!");
    }
  }
  this.cred = function(player) {
    var credChance = Math.random();
    if (credChance > .5) {
      $('.credPoints').html(player.streetCred += minMax(1, 20));
      $('.credPoints2').html(player.streetCred += minMax(1, 20));
    } else {
      $('#description').html(this.name + " street cred is messed up and could gain anymore!")
    }
  }
}

var player1 = new Player();
var player2 = new Player();


player1.name = "Gangsta Chewie";
player2.name = "Thug Trooper";


$(".flow.player1").on('click', function() {
  player1.flow(player2);
});

$(".cred.player1").on('click', function() {
  player1.cred(player1);
});

$(".flow.player2").on('click', function() {
  player2.flow(player1);
});

$(".cred.player2").on('click', function() {
  player2.cred(player2);
});

});