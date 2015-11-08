function Character (name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;

  this.isAlive = function(){
    return this.health > 0; 
  }

  this.attack = function attack(opponent) {
    opponent.health -= 10;
    console.log(this.name + " just attacked " + opponent.name + " for 10 points!");
    console.log(opponent.name + "'s health is now " + opponent.health);
    console.log("");
  };

  /* we may use these in the future. Keep them for now
  
  this.killHit = function (opponent) {
    opponent.heal -= this.randomCrit();
  };
  
  this.randomCrit = function () {
    var max = 20;
    var min = 11;

    return Math.floor(Math.random() * (max - min) + min);

  }
  */
};

function Weapon(name, minAttack, maxAttack){
  this.name = name;
  this.minAttack = minAttack;
  this.maxAttack = maxAttack;
}

function declareWinner(player){
  alert(player.name + " is the winner!!");
 }

// my players 
var sword = new Weapon("Sword", 0, 20);
var knight = new Character("Knight", 50, sword);

var flame = new Weapon("Flame", 0, 10);
var dragon = new Character("Dragon", 100, flame);

while (knight.isAlive() && dragon.isAlive()) {
  knight.attack(dragon);
  if (!dragon.isAlive()){
    declareWinner(knight);
    break;
  }

  dragon.attack(knight);
  if (!knight.isAlive()){
    declareWinner(dragon);
    break;
  }
}
