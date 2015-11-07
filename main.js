$(document).ready(function(){


	var playerArr=[];
	var simonArr=[];
	var audio= new Audio("tone1.mp3");
	var audio2= new Audio("tone2.wav");
	var audio3= new Audio("tone3.wav");
	var audio4= new Audio("tone4.wav");

	function randomRange(min,max) {
		return Math.floor(Math.random()*4 +1);
	};

	function reset() {
		playerArr=[];
		simonArr=[];
		$("#score").html("");
		
	}	
	function checker(array1,array2) {
		var len1=array1.length;
		var arr2 = array2.slice(0, len1);

		if (arraysEqual(array1, arr2)){
			$("#score").html(playerArr.length);
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

		if("#playAgain") {
			simonArr=[];
		};
		

	};

	$("#start").on('click',function(){
		$("#start").hide();
		simonArr.push(randomRange(1,4));
		$(".button"+simonArr[0]).addClass("glow");
		if($(".button").hasClass("glow")===true) {
					setTimeout(function(){
				$(".button").removeClass("glow");
					},400);
					console.log(playerArr);
					console.log(simonArr);
				};
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
		}
	

	});

	$("#playAgain").on('click',function(){

		
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
		audio.play();

	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		checker(playerArr,simonArr);
		audio2.play();
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		checker(playerArr,simonArr);
		audio3.play();

	});
	$("#green").on('click',function(){
		playerArr.push(4);
		checker(playerArr,simonArr);
		audio4.play();
	});

	function animate(index) {
		setTimeout(function() {
			if(index!==simonArr.length) {
				$(".button"+simonArr[index]).addClass("glow");

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









