//*******  ACTIONS *************************************************************
//******************************************************************************

/// ***** Enter Player Name **********************************

	$('#name-submit').on('click', function(e){
		e.preventDefault();
		player1.name = $('#player-name').val();
		$('#intro').fadeOut(1000);
		console.log(player1.name);
	});
$('#startTheGame').on('click', function(e){
	e.preventDefault();
	
})
