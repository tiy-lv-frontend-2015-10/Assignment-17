$(document).ready(function () {

function Player() {
    this.name;
    this.health= 50; 
    this.attack = function(opponent) {
        opponent.healh -= randomNum;
    }
var randomNum = Math.floor((Math.random() * 10) + 1);
};
    
var p1 = new Player();
var p2 = new Player();
    
p1.name = "Peter";
p2.name = "Chicken";
p1.health = "";
p2.health = ;
p1.attack = "";
p2.attack = ;
    
Player.prototype.attack = function(player) {
    
}
    
p1.attack(p2);
    Player.prototype.attack = function(player) {
        return p2.health;
    };
p2.attack(p1);
    Player.prototype.attack = function(player) {
        return p1.health;
    };
     
    
//experimental youtube api    
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function PlayVideo() {
    //this.load();??//add youtube video link
    this.play = function() {
        var = player;
        function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'W4WGQmWcrbs',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
    });
}
}
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
    
punchesChicken.play = ;//start time & duration 2:48
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
//$("#video").on("click", function() 

    
});//closes ready