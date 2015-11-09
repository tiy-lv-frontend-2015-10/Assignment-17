$(document).ready(function () {
   
$("#playBtn").on('click', function() {
    location.reload();
});
    
    
function Player() {
    this.name;
    this.health = 50; 
    this.attack = function(opponent) {
        var randomNum = Math.floor((Math.random() * 10) + 1);
        //opponent.health -= randomNum; 
        var score = opponent.health - randomNum;
        
    if (p1.attack) {
    document.querySelector("#peterPointsBtn").innerHTML = score;//p1.health
    }
    if (p2.attack) {
    document.querySelector("#chickenPointsBtn").innerHTML = score;//p2.health
    }
    if (p1.health <= 0) {
        document.getElementById("winner").innerHTML = "Chicken Wins!";
    }
    if (p2.health <= 0) {
        document.getElementById("winner").innerHTML = "Peter Wins!";
    }
}
};
//Player.prototype.image = function(images) {///////////////////
    
//}/////////////////////////////////////////////////////////////
    
var p1 = new Player();
var p2 = new Player();
    
p1.name = "Peter";
p2.name = "Chicken";

$("#punchesChickenBtn").on('click', function() { p1.attack(p2); });
$("#throwChickenBtn").on('click', function() { p1.attack(p2); });
$("clubChickenBtn").on('click', function() { p1.attack(p2); });
$("strangleChicken").on('click', function() { p1.attack(p2); });

$("electrocutePeter").on('click', function() { p2.attack(p1); });
$("crushPetersHead").on('click', function() { p2.attack(p1); });
$("kickPetersFace").on('click', function() { p2.attack(p1); });
$("punchesPeter").on('click', function() { p2.attack(p1); });

//Player.attack.apply(p1, p2);    
    
//video code/////////////////////////////////////////////////////////////
/*function PlayVideo() {
    this.play = function() {
           var videoFile = $(this).Attr('videofile');
           var videoPoster = $(this).Attr('videofile');
           var videoWidth = Number($(this).Attr('videowidth'));
           var videoHeight = Number($(this).Attr('videoheight'));
           var videoCode = "https://www.youtube.com/embed/W4WGQmWcrbs";
           $('#videoPlayer').html(videoCode);
       };
    }
    
var punchesChicken = new PlayVideo();
var throwsChicken = new PlayVideo();
var clubsChicken = new PlayVideo();
var stranglesChicken = new PlayVideo();
var electrocutesPeter = new PlayVideo();
var crushPetersHead = new PlayVideo();
var kickPetersFace = new PlayVideo();
var punchesPeter = new PlayVideo();
    
var peterDies = new PlayVideo();
var chickenDies = new PlayVideo();
    
punchesChicken.play = $('#punchesChickenBtn').click;//start time & duration 2:48
throwsChicken.play = ;//start time 2:55
clubsChicken.play = ;//start time 3:04
stranglesChicken.play = ;//start time 4:03
electrocutesPeter.play = ;//start time 2:12
crushPetersHead.play = ;//start time 4:15
kickPetersFace.play = ;//start time 3:59
punchesPeter.play = ;//start time 4:15

peterDies.play = ;//start time 4:52
chickenDies.play = ;//start time 4:36


    
//add video 'on click' attack buttons
//$("#video").on("click", function() */////////////////////
    
    
    
/*------------------------------scroller----------------------------*/
/*//////////////////////////////////////////////////////// 
$(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });
 *///////////////////////////////////////////////////////   
    
});//closes ready