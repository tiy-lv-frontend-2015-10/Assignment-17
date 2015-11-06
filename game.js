$( document ).ready(function() {
var Character = function(name, hp, a1, sec, sp) {
  this.name = name;
  this.hp;

  
  this.attack = function attack (opponent) {
    var hitChance = Math.random();
    if (hitChance > .3 && hitChance <.7) {
      opponent.hp -= 10;
     alert(this.name + " used " + a1 + " and it hit ");
    } else if (hitChance >.71){
      opponent.hp -=25;
      alert(this.name + " used " + a1 + " attack and it was CRITICAL!!!!");
    }else{
      alert(this.name + " used " + a1 + " attack and missed!!!!");
    }
  };

  this.secondary = function secondary (opponent) {
    var hitChance = Math.random();
    if (hitChance > .4 && hitChance <.8) {
      opponent.hp -= 20;
      alert(this.name + " landed " + sec + " !!!!!");
    } else if (hitChance >.81){
      opponent.hp -= 45;
      alert(this.name + " just connected with a burtal " + sec +" !!!");
    }else{
      alert(this.name + " missed!!!!");
    }
  };

  this.special = function special (opponent) {
    var hitChance = Math.random();
    if (hitChance > .7) {
      opponent.hp -= 50;
      alert(this.name + " just annihilated his opponent with " + sp );
    }else{
      alert(this.name + " missed!!!!");
    }
  };


      $('.player1 .attack').on('click', function attack (opponent) {
    $('.battleLog').html(ObiWan.name + ' attacks with a ' + ObiWan.a1 + '. ');
    $('.battleLog').html(DarthVader.name + " has " + DarthVader.hp + " hp left");
  });

    $('.player1 .secondary').on('click', function secondary (opponent) {
    $('.battleLog').html(ObiWan.name + ' attacks with a ' + ObiWan.sec + '. ');
  });

    $('.player1 .special').on('click', function special (opponent) {
    $('.battleLog').html(ObiWan.name + ' attacks with a ' + ObiWan.sp + '. ');
  });

  ////////////////////////////////

    $('.player2 .attack').on('click', function attack (opponent) {
    $('.battleLog').html(DarthVader.name + ' attacks with a ' + DarthVader.a1 + '. ');
  });

    $('.player2 .secondary').on('click', function secondary (opponent) {
    $('.battleLog').html(DarthVader.name + ' attacks with a ' + DarthVader.sec + '. ');
  });

    $('.player2 .special').on('click', function special (opponent) {
    $('.battleLog').html(DarthVader.name + ' attacks with a ' + DarthVader.sp + '. ');
  });


var ObiWan  = new Character("Obi Wan", 100, "Sabre Slash", "Force Push", "Force Awaken");
var DarthVader = new Character("Darth Vader", 100, "Sabre Slash", "Force Choke", "Sith Ligthning");
};

});

/*
var ObiWan  = new Character("Obi Wan", 100, "Sabre Slash", "Force Push", "Force Awaken");
var DarthVader = new Character("Darth Vader", 100, "Sabre Slash", "Force Choke", "Sith Ligthning");
ObiWan.attack(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.attack(ObiWan)
ObiWan.special(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.special(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.secondary(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.secondary(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.attack(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.attack(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.secondary(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.secondary(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.special(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.special(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.secondary(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.secondary(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
ObiWan.special(DarthVader)
alert(DarthVader.name + " has " + DarthVader.hp + " hp left");
DarthVader.special(ObiWan)
alert(ObiWan.name + " has " + ObiWan.hp + " hp left");
});
*/