!function() {
$(document).ready(function () {

  var Player = function () {
      this.name;
      this.health = 1000;
      this.attack = function (opponent) {
          var attackChance = Math.random();
          if (attackChance) > .9) {
              opponent.health -= 10;
          } else {
              console.log(this.name + " missed!!!!");
          }
      };
      this.criticalHit = function (opponent) {
          opponent.health -= this.randomCris();
      };
      this.randomCrit = function () {
          var max = 18;
          var min = 7;
          
          return Math.floor(Math.random() * (max-min) + min);
      }
  };
    
    var p1 = new Player();
    var p2 = new Player();
    
    p1.name = "Peter";
    p2.name = "Chicken";
    
    
    
});//closes ready
}();//closes iffe