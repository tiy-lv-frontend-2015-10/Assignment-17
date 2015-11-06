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

	

	// function comparison(playerArr,simonArr) {

	// 		for(var i=0; i<simonArr.length; i++)
	// 			if(playerArr[i]===simonArr[i]) {
	// 				console.log(true);

	// 	} else {
	// 		console.log(false);
	// 		reset();
	// 		$("#start").hide();
	// 		$("#playAgain").show();

	// }

	// };

// 	function playerReset(array1,array2) {
// 		var len1=array1.length;
// 		var arr2 = array2.slice(0, len1);
// 		if (arraysEqual(len1,arr2)) {
// 			console.log(len1===arr2);
// 			array1=[];
// 			$("#playerDiv").html("");

// 		} 
// }	
	
	function checker(array1,array2) {
		var len1=array1.length;
		var arr2 = array2.slice(0, len1);

		if (arraysEqual(array1, arr2)){
			console.log(true);
			

			$("#playerDiv").html("");
			$("#playerDiv").html(array1);
			console.log(array1);
		} else {
			console.log(false);
			reset();
			$("#start").hide();
			$("#playAgain").show();
		}
		if(array1.length===array2.length) {
			playerArr=[];
			simonArr.push(randomRange(1,4));
		} else {
			console.log(false);
		}
	}



	
	$("#start").on('click',function(){
		
		simonArr.push(randomRange(1,4));
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
		}
		$("#simonDiv").html(simonArr);

	});

	$("#playAgain").on('click',function(){
		
		simonArr.push(randomRange(1,4));
		if(simonArr.length>1) {
			simonArr=[randomRange(1,4)];
		}
		$("#simonDiv").html(simonArr);
		$("#start").show();
		$("#playAgain").hide();

	});

	$("#red").on('click',function(){
		playerArr.push(1);
		checker(playerArr,simonArr);
		console.log(playerArr);
		console.log(simonArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);

	});
	$("#blue").on('click',function(){
		playerArr.push(2);
		checker(playerArr,simonArr);
		console.log(playerArr);
		console.log(simonArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);


	});
	$("#yellow").on('click',function(){
		playerArr.push(3);
		checker(playerArr,simonArr);
		console.log(playerArr);
		console.log(simonArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);


	});
	$("#green").on('click',function(){
		playerArr.push(4);
		checker(playerArr,simonArr);
		console.log(playerArr);
		console.log(simonArr);
		$("#playerDiv").html(playerArr);
		$("#simonDiv").html(simonArr);


	});

	

	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
  	if (a[i] !== b[i]) return false;
  }
  return true;
}




});









