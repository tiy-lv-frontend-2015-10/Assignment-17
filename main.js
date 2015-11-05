$(document).ready(function(){


	var playerArr=[];
	var simonArr=[];
	function randomRange(min,max) {
		return Math.floor(Math.random()*4 +1);
	};
	
	$("#start").on('click',function(){
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
	})

	$("#red").on('click',function(){
		playerArr.push(1);
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
	});
	$("#green").on('click',function(){
		playerArr.push(4);
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
	});



});
	
	



	
	
	

	
	