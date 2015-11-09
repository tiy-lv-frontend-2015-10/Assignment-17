//Players class
$(document).ready(function() {
                  
                  
function Player() {
    
    this.name;
    
    this.health = 100;
    
    this.power =100;
    
    this.attack = function attack(opponent){
        opponent.health -=10;
    $("#log").html(this.name + " Just hit " + opponent.name + "<br />");
    
    this.power = function power(opponent){
        opponent.health -=30;
      $("#log").html(this.name + " used power to attack " +   opponent.name  + "<br/>");
        
    this.assistant = function assistant(opponent){
        opponent.health -=20;
      $("#log").html(this.name + " used a special assistant to attack " + opponent.name + "<br/>");
    };
    };
    };
}

// characters

var p1 = new Player();
var p2 = new Player();
   
//names
 p1.name = "Apple";
 p2.name = "Android";

//character attacks
    
    //Apple attacks
$(".b1").on("click", function(){
p1.attack(p2);
$("#log").append( p2.name + " has " + p2.health + " health left ");
    });
    
    $(".b2").on("click", function(){
p1.power(p2);
$("#log").append( p2.name + " has " + p2.health + " health left ");
    });
    
    $(".b3").on("click", function(){
p1.assistant(p2);
$("#log").append( p2.name + " has " + p2.health + " health left ");
    });
    
    //Android attacks

$(".b4").on("click", function(){
p2.attack(p1);
$("#log").append( p1.name + " has " + p1.health + " health left ");
    });
    
    $(".b5").on("click", function(){
p2.power(p1);
$("#log").append( p1.name + " has " + p1.health + " health left ");
    });
    
    $(".b6").on("click", function(){
p2.assistant(p1);
$("#log").append( p1.name + " has " + p1.health + " health left ");
    });
    
});
    //Timer
    function countDown(secs,elem) {
     var element = document.getElementById(elem);
     element.innerHTML = " Round Time " +secs+ "";
     
if (secs < 1){
	clearTimeout(timer);
    	element.innerHTML ='<p>Round Complete</p>';
		
}
secs--;
var timer=setTimeout('countDown('+secs+',"'+elem+'")',1000);}
 
 countDown(5,"status");
 

    
    
    