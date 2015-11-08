$( document ).ready(function() {

  var saber = new Audio ('sounds/lightsaberClash.mp3');
  var ligthning = new Audio ('sounds/forceLightning.mp3');
  var force = new Audio ('sounds/forceAwaken.mp3')


var Character = function(name, hp, a1, sec, sp) {
  this.name = name;
  this.hp = 100;
  this.a1 = a1;
  this.sec = sec;
  this.sp = sp;

  
  this.attack = function attack (opponent) {
    var hitChance = Math.random();
    if (hitChance > .3 && hitChance <.7) {
      opponent.hp -= 10;
      saber.play();
      alert(this.name + " used " + a1 + " and it hit ");
    } else if (hitChance >.7){
      opponent.hp -=25;
      saber.play();
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

};
var ObiWan  = new Character("Obi Wan", 100, "Saber Slash", "Force Push", "Force Awaken");
var DarthVader = new Character("Darth Vader", 100, "Saber Slash", "Force Choke", "Sith Ligthning");


  $('.player1 .attack').on('click', function() {
    $('.player1 button').hide();
    $('.player2 button').show();
    ObiWan.attack(DarthVader);
    $('.battle').html(ObiWan.name + ' attacks with a ' + ObiWan.sec + '. ');
    $('#vaderHp').val(DarthVader.hp);
    if (DarthVader.hp <= 0) {
      alert(ObiWan.name + " is Victorious");
      location.reload();
    }
  });

  $('.player1 .secondary').on('click', function() {
    $('.player1 button').hide();
    $('.player2 button').show();
    ObiWan.secondary(DarthVader);
    $('.battle').html(ObiWan.name + ' attacks with a ' + ObiWan.sec + '. ');
    $('#vaderHp').val(DarthVader.hp);
     if (DarthVader.hp <= 0) {
      alert(ObiWan.name + " is Victorious");
      location.reload();
    }
  });

  $('.player1 .special').on('click', function() {
    force.play();
    $('.player1 button').hide();
    $('.player2 button').show();
    ObiWan.special(DarthVader);
    $('.battle').html(ObiWan.name + ' attacks with a ' + ObiWan.sp + '. ');
    $('#vaderHp').val(DarthVader.hp);
     if (DarthVader.hp <= 0) {
      alert(ObiWan.name + " is Victorious");
      location.reload();
    }
  });

  ////////////////////////////////

  $('.player2 .attack').on('click', function() {
    saber.play();
    $('.player2 button').hide();
    $('.player1 button').show();
    DarthVader.attack(ObiWan)
     $('.battle').html(DarthVader.name + ' attacks with a ' + DarthVader.sp + '. ');
     $('#obiHp').val(ObiWan.hp);
     if (ObiWan.hp <= 0) {
      alert(DarthVader.name + " is Victorius");
      location.reload();
    }
  });

  $('.player2 .secondary').on('click', function() {
    $('.player2 button').hide();
    $('.player1 button').show();
    DarthVader.secondary(ObiWan)
     $('.battle').html(DarthVader.name + ' attacks with a ' + DarthVader.sp + '. ');
     $('#obiHp').val(ObiWan.hp);
     if (ObiWan.hp <= 0) {
      alert(DarthVader.name + " is Victorius");
      location.reload();
  }
  });

  $('.player2 .special').on('click', function() {
    ligthning.play();
    $('.player2 button').hide();
    $('.player1 button').show();
    DarthVader.special(ObiWan)
     $('.battle').html(DarthVader.name + ' attacks with a ' + DarthVader.sp + '. ');
     $('#obiHp').val(ObiWan.hp);
     if (ObiWan.hp <= 0) {
      alert(DarthVader.name + " is Victorius");
      location.reload();
  }
  });

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