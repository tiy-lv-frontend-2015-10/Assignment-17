$(document).ready(function(){


	var playerArr=[];
	var simonArr=[];
	function randomRange(min,max) {
		return Math.floor(Math.random()*4 +1);
	};

	function comparison(playerArr,simonArr) {
		if(playerArr.length!==simonArr.length) return false;{
			for(var i=0; i<simonArr.length; i++)
				if(playerArr[i]!==simonArr[i]) {
					return false;
				} else {
					return true;
				}
		}
	}
	
	$("#start").on('click',function(){
		
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);

	});

	$("#red").on('click',function(){
		playerArr.push(1);
		console.log(playerArr);
		comparison(playerArr,simonArr);
	
	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		console.log(playerArr);
	
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		console.log(playerArr);
		
	});
	$("#green").on('click',function(){
		playerArr.push(4);
		console.log(playerArr);
		
	});
	// 	if(playerArr.length===simonArr.length) {

	// 	if(playerArr.length&&simonArr.length===1) {
	// 	simonArr.push(randomRange(1,4));
	// }
	$("#red").on('click',function(){
		
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);	
		console.log(playerArr);
	
	});
	$("#blue").on('click',function(){
		
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);
	
	});
	$("#yellow").on('click',function(){
		


		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);

	});
	$("#green").on('click',function(){
			
		$("#playerDiv").html(playerArr);
		simonArr.push(randomRange(1,4));
		$("#simonDiv").html(simonArr);
		console.log(playerArr);
	
	});

// }

});
	
	



	
	
	

	
	