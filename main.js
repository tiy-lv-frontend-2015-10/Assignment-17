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
      console.log(opponent.streetCred -= minMax(1, 11));
    } else {
      console.log("YO!! the flow is weak in " + this.name + "." + " Thug Troopers turn!");
    }
  }
  this.cred = function(player) {
    var credChance = Math.random();
    if (credChance > .5) {
      console.log(player.streetCred += minMax(1, 30));
    } else {
      console.log(this.name + " street cred is messed up and could gain anymore!")
    }
  }
}

var player1 = new Player();
var player2 = new Player();


player1.name = "Gangsta Chewie";
player2.name = "Thug Trooper";


$(".flow").on('click', function(opponent) {
  player1.flow(player2);
});

$(".cred").on('click', function() {
  player1.cred;
})











});