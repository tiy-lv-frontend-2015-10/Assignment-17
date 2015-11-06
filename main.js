function Character () {
  this.name;
  this.hitpoints = 500;
  this.energy = 400;
  this.attack = function attack(opponent) {
  opponent.hitpoints -=100
  alert(this.name + " just attack " + opponent.name);
  };
  this.killHit = function (opponent) {
    opponent.heal -= this.randomCrit();
  };
  this.randomCrit = function () {
    var max = 20;
    var min = 11;

    return Math.floor(Math.random() * (max - min) + min);
  }
};

// my players

var p1 = new Character();
var p2 = new Character();


p1.name = "Knight"
p2.name = "Dragon"


p1.attack(p2);
alert(p2.name + " has " + p2.hitpoints + " points left. The Dragon it is in bad mood !!!");

p2.attack(p1);
alert(p1.name + " has been attack")
alert(p1.name + " has " + p1.hitpoints + " points left ");

Character.prototype.heal = function heal(targetCharacter){
  targetCharacter.hitpoints += 200;
} 

p2.heal(p1);
alert(p1.name + " has " + p1.hitpoints + " points left after been heal ");

/*p1.attack(p2);
console.log(p2.name + " was attacked and has " + p2.health + " health left");

Character.prototype.heal = function () {
 Character.health += 5;
}

Player.prototype.emotionalAttack = function (player) {
  player.health -= 65;
}
p1.heal(p2);
console.log(p2.name + " was healed and has " + p2.health + " health left");

p2.criticalHit(p1);
console.log(p1.name + " was critically attacked and has " + p1.health + " health left");

p1.emotionalAttack(p2);
console.log(p1.name + " told " + p2.name + " the horrifying truth. " + p2.name + " couldn't handle the truth. NOOOOOOO!!!!");
console.log(p2.name + " has " + p2.health + " health left. Poor guy");*/




