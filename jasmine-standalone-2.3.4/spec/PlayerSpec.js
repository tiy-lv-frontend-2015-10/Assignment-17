
describe ("character", function(){
  var prince;
  var dragon;

  beforeEach(function(){
    prince = new Prince();
    console.log(prince.weapon); 
    dragon = new Dragon();
  })

  it("should be able to attack the dragon", function(){
    expect(prince.weapon).toBe("sword");
    prince.attack(dragon);
    expect(dragon.status).toBe("in bad mood")
  });

  it("should attack prince", function(){
    expect(dragon.weapon).toBe("flame");
    dragon.attack(prince);
    expect(prince.status).toBe("hurt")
  });

 it("should dragon attack prince", function(){
    expect(dragon.criticalHit).toBe(????)
    dragon.attack(prince)

  });


/* it("should prince attack dragon twice", function(){
    prince.attack(dragon)
    expect(dragon.fly).toBe("low");
    expect(dragon.status).toBe("tire");
  });
*/
}); 
  
