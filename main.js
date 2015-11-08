$(document).ready(function(){

//Audio constructors

	var playerArr=[];
	var simonArr=[];
	var audio1= new Audio("tone1.wav");
	var audio2= new Audio("tone2.wav");
	var audio3= new Audio("tone3.wav");
	var audio4= new Audio("tone4.wav");
	var audio5= new Audio("imperial-march.wav");
//

//Generates random number between 1 and 4

	function randomRange(min,max) {
		return Math.floor(Math.random()*4 +1);
	};
//
//resets the simon array and the player array, darkens background adds gif and starts music
	function reset() {
		simonArr=[];
		playerArr=[];
		audio5.currentTime=0;
		audio5.play();
		$(".button").addClass("btnDarken");
		$("body").css("background","#000");
		$("#darth").fadeIn(1000);
		$("#explosion").show();
		
	}
//compares both the arrays, if equal it calls animate function, if false it resets.

	function checker(array1,array2) {
		var len1=array1.length;
		var arr2 = array2.slice(0, len1);

		if (arraysEqual(array1, arr2)){
		$("#score").html(simonArr.length);
		} else {
			reset();
			$("#start").hide();
			$("#playAgain").show().css("display","block");

		}
		if(array1.length===array2.length) {
			playerArr=[];
			simonArr.push(randomRange(1,4));
			animate(0);

		} 

		if($("#playAgain").is(":visible")){
			simonArr=[];
		};
		

	};
		function minuteFunction() {
		var counter = 61;
		var minuteTimer=setInterval(function() {
  		--counter;
  		$("#counter").text(counter);
  		if(counter===0) {
  			clearInterval(minuteTimer);
  			reset();
  			$("#playAgain").show();
  			$("#metal").show();

  		};

		}, 1000);

	};



	$("#start").on('click',function(){
		$('.button').prop('disabled', false);
		$("#start").hide();
		$("#scoreDiv").show();
		simonArr.push(randomRange(1,4));
		var startSound=new Audio("tone"+simonArr[0]+".wav");
		startSound.play();
		$(".button"+simonArr[0]).addClass("glow");
		if($(".button").hasClass("glow")===true) {
					setTimeout(function(){
				$(".button").removeClass("glow");
					},400);
				};
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
			
		}
	

	});

	$("#metal").on('click',function(){
		minuteFunction();
		$('.button').prop('disabled', false);
		$("#start").hide();
		$("#metal").hide();
		$("#scoreDiv").show();
		simonArr.push(randomRange(1,4));
		var startSound=new Audio("tone"+simonArr[0]+".wav");
		startSound.play();
		$(".button"+simonArr[0]).addClass("glow");
		if($(".button").hasClass("glow")===true) {
					setTimeout(function(){
				$(".button").removeClass("glow");
					},400);
				};
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
			
		}
	

	});

	$("#playAgain").on('click',function(){
		$("#score").html("");
		$(".button").removeClass("btnDarken");
		$("body").css("background","#494848");
		$("#darth").hide();
		$("#explosion").hide();
		audio5.pause();
		$("#playAgain").hide();
		simonArr.push(randomRange(1,4));
		$(".button"+simonArr[0]).addClass("glow");
		if($(".button").hasClass("glow")===true) {
					setTimeout(function(){
				$(".button").removeClass("glow");
					},400);
				};
		
	

	});


	$("#red").on('click',function(){
		playerArr.push(1);
		checker(playerArr,simonArr);
		audio1.play();
		audio1.currentTime=0;

	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		checker(playerArr,simonArr);
		audio2.play();
		audio2.currentTime=0;
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		checker(playerArr,simonArr);
		audio3.play();
		audio3.currentTime=0;

	});
	$("#green").on('click',function(){
		playerArr.push(4);
		checker(playerArr,simonArr);
		audio4.play();
		audio4.currentTime=0;
	});

	function animate(index) {
		
		setTimeout(function() {
			if(index!==simonArr.length) {
				$(".button"+simonArr[index]).addClass("glow");
				var global=new Audio("tone"+simonArr[index]+".wav");
				global.play();
				if($(".button").hasClass("glow")===true) {
					setTimeout(function(){
				$(".button").removeClass("glow");
					},400);
			};
				index+=1
				animate(index);
			} 
		},1000)

		}
			
	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
  	if (a[i] !== b[i]) return false;
  }
  return true;
}




});









