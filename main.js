$(document).ready(function () {
   
$("#playBtn").on('click', function() {
    location.reload();
});
    
$("#punchesChickenBtn").on('click', function() { p1.attack(p2); });
$("#throwsChickenBtn").on('click', function() { p1.attack(p2); });
$("#clubsChickenBtn").on('click', function() { p1.attack(p2); });
$("#stranglesChickenBtn").on('click', function() { p1.attack(p2); });

$("#electrocutesPeterBtn").on('click', function() { p2.attack(p1); });
$("#crushesPetersHeadBtn").on('click', function() { p2.attack(p1); });
$("#kicksPetersFaceBtn").on('click', function() { p2.attack(p1); });
$("#punchesPeterBtn").on('click', function() { p2.attack(p1); });    
    
function Player() {
    this.name;
    this.health = 50; 
    this.attack = function(opponent) {
        var randomNum = Math.floor((Math.random() * 10) + 1);
        //opponent.health -= randomNum; 
        var score = opponent.health - randomNum;
    
    if (p2.attack = true) {
    return document.querySelector("#peterPointsBtn").innerHTML = score;//p1.health
    };
    if (p1.attack = true) {
    return document.querySelector("#chickenPointsBtn").innerHTML = score;//p2.health
    };
    if (p1.health <= 0) {
        document.getElementById("winner").innerHTML = "Chicken Wins!";
    };
    if (p2.health <= 0) {
        document.getElementById("winner").innerHTML = "Peter Wins!";
    };
  }
};
//Player.prototype.image = function(images) {///////////////////
    
//}/////////////////////////////////////////////////////////////
    
var p1 = new Player();
var p2 = new Player();
    
p1.name = "Peter";
p2.name = "Chicken";




    
});//closes ready