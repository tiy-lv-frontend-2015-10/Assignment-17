$(document).ready(function(){


	var playerArr=[];
	var simonArr=[];
	function randomRange(min,max) {
		return Math.floor(Math.random()*4 +1);
	};

	function reset() {
		playerArr=[];
		simonArr=[];
		$("#playerDiv").html("");
		$("#simonDiv").html("");
	}

	function comparison(playerArr,simonArr) {

			for(var i=0; i<simonArr.length; i++)
				if(playerArr[i]===simonArr[i]) {
					console.log(true);
					
		} else {
			console.log(false);
			reset();

	}

	};


	
	$("#start").on('click',function(){
		
		simonArr.push(randomRange(1,4));
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
		}
		$("#simonDiv").html(simonArr);

	});

	$("#red").on('click',function(){
		playerArr.push(1);
		comparison(playerArr,simonArr);
		simonArr.push(randomRange(1,4));
		console.log(playerArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);
	
	
	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		comparison(playerArr,simonArr);
		simonArr.push(randomRange(1,4));
		console.log(playerArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);
	
	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		comparison(playerArr,simonArr);
		simonArr.push(randomRange(1,4));
		console.log(playerArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);
	
	});
	$("#green").on('click',function(){
		playerArr.push(4);
		comparison(playerArr,simonArr);
		simonArr.push(randomRange(1,4));
		console.log(playerArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);
	
	});

});
	


	
	



	
	
	

	
	