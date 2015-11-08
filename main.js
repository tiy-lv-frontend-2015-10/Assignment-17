$(document).ready(function() {

var audio = new Audio('chewie.mp3');

var audio2 = new Audio('blaster.wav');

var audio3 = new Audio('health.mp3');

var audio4 = new Audio('cantina.mp3')



$('#reset').on('click', function(){
  location.reload();
});

$('.flow.player1').on('click', function(){
  (audio).play();
  audio.currentTime = 0;
});

$('.flow.player2').on('click', function(){
  (audio2).play();
  audio2.currentTime = 0;
});

$('.cred').on('click', function(){
  (audio3).play();
  audio3.currentTime = 0;
});

$('.fontawesome-forward').on('click', function(){
  (audio4).play();
});

$('.fontawesome-pause').on('click', function(){
  (audio4).pause();
});


function minMax(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function Player(container) {
  this.name;
  this.streetCred = 100;
  this.container = $(container);
  this.flow = function(opponent) {
    var flowChance = Math.random();
    if (opponent.streetCred <= 0) {
      $('#reset').show();
      $('#akbar').fadeIn();
    } else if (flowChance < .8) {
      opponent.streetCred -= minMax(1,11);
      opponent.container.find('.credPoints').html(opponent.streetCred);
      $('#description').html("YO!! You hit him with that flow! " + opponent.name + " turn.");
    } else {
      $('#description').html("BRUH!! The flow is weak in " + this.name + "." + " Next players turn!");
    }
  }
  this.cred = function(player) {
    var credChance = Math.random();
    if (credChance > .3) {
      player.container.find('.credPoints').html(player.streetCred += minMax(1, 20));
      $('#description').html("My street cred game is tight! Next players turn!");
    } else {
      $('#description').html(this.name + " street cred is messed up and could gain anymore! Next players turn!");
    }
  }
}


var player1 = new Player('.player1');
var player2 = new Player('.player2');

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