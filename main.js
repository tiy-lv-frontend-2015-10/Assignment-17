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
	
	});
	$("#blue").on('click',function(){
		playerArr.push(2);
	
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		
	});
	$("#green").on('click',function(){
		playerArr.push(4);
		
	});
		if(playerArr===simonArr) {

	$("#red").on('click',function(){
		if(playerArr===simonArr) {
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);	
		console.log(playerArr);
	}
	});
	$("#blue").on('click',function(){
		if(playerArr===simonArr) {
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);
	}
	});
	$("#yellow").on('click',function(){
		if(playerArr===simonArr) {


		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);
	}
	});
	$("#green").on('click',function(){
			if(playerArr===simonArr){
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);
	}
	});


}
});
	
	



	
	
	

	
	