$( document ).ready(function() {


    //
    // GAME OBJECTS
    //


    //
    // Character object
    // Description: This is the object that represents a character in the game
    //
    function Character(health, weapon) {
        this.health = health;
        this.weapon = weapon;
    };

    Character.prototype.isAlive = function(){
        return this.health > 0; 
    }

    Character.prototype.attack = function attack(opponent) {
        var weaponDamage = this.weapon.damage();
        opponent.health = opponent.health - weaponDamage;
        if (opponent.health < 0){
            opponent.health = 0
        }

        console.log(this.name + " just attacked " + opponent.name + " for " + weaponDamage + " points!");
        console.log(opponent.name + "'s health is now " + opponent.health);
        console.log("");
    };


    function Knight(){
        this.name = "Knight";
    }
    Knight.prototype = new Character(35, new Weapon("sword", 0, 15));
    

    function Dragon(){
        this.name = "Dragon";
    }
    Dragon.prototype = new Character(25, new Weapon("flame", 0, 8));

    //
    // Weapon object
    // Description: This is the object that represents a character's weapon
    //
    function Weapon(name, minAttack, maxAttack){
        this.name = name;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.damage = function(){
            return getRandomInt(this.minAttack, this.maxAttack);
        }
    }


    //
    // UTILITY FUNCTIONS
    //

    //
    // declareWinner
    // Description: Declares the winner of the game
    //
    function declareWinner(winningPlayer, isYou){
        var data = { name: winningPlayer.name,
                     isYou: isYou};
        var winnerTemplate = $("#winnerTemplate").text();
        var winnerHtml = Mustache.render(winnerTemplate, data);
        $("#user-prompt").html(winnerHtml);

        $('#restartBtn').click(function(){
            location.reload();
        })
    }

    function showGameStatus(player, computer){
        var data = {characters: [player, computer]}
        var showGameStatusTemplate = $("#showGameStatusTemplate").text();
        var statusHtml = Mustache.render(showGameStatusTemplate, data);
        $("#game-status").html(statusHtml);
    }

    function showTurnStatus(turnResult) {
        var data = {actions: [{attacker: turnResult.firstAttacker,
                                action: turnResult.firstAction,
                                defender: turnResult.firstDefender,
                                damage: turnResult.firstDamage},

                              {attacker: turnResult.secondAttacker,
                                action: turnResult.secondAction,
                                defender: turnResult.secondDefender,
                                damage: turnResult.secondDamage}]};

        var showTurnStatusTemplate = $("#showTurnStatusTemplate").text();
        var turnStatusHtml = Mustache.render(showTurnStatusTemplate, data);
        $("#turn-status").html(turnStatusHtml);
    }

    //
    // promptUserForCharacter
    // Description: Asks the user which character to be
    //
    function promptUserForCharacter(knight, dragon){

        // render user prompt for character with mustache
        var data = {characters: [knight, dragon]}
        var characterPromptTemplate = $("#characterPromptTemplate").text();
        var characterHtml = Mustache.render(characterPromptTemplate, data);
        $("#user-prompt").html(characterHtml);

        $("#choiceBtn").click(function(e) {
            assignCharacters(knight, dragon);
        });
       
    }

    function assignCharacters(knight, dragon) {
        var selectedCharacter = $('input[name=characters]:checked', '#characterChoice' ).val();
        if (selectedCharacter.toLowerCase() === "knight"){
            var player = knight;
            var computer = dragon;
        }
        else {
            var player = dragon;
            var computer = knight;
        }

        showGameStatus(player, computer);
        promptUserForUserAction(player, computer);
    }

    //
    // promptUserForUserAction
    // Description: Asks the user for next action
    //
    function promptUserForUserAction(player, computer){
        var data = {actions: ['attack']}
        var userActionTemplate = $("#userActionTemplate").text();
        var nextMoveHtml = Mustache.render(userActionTemplate, data);
        $("#user-prompt").html(nextMoveHtml);

        $("#actionBtn").click(function(e){
            var selectedAction = $('input[name=actions]:checked', '#nextMove' ).val();
            performAction(selectedAction, player, computer);
        });
    }

    //
    // performAction
    // Description: Executes the user action
    //
    function performAction(selectedAction, player, computer) {

        if (selectedAction === "attack") {
            var beginningComputerHealth = computer.health;
            player.attack(computer);
            var computerDamage = beginningComputerHealth - computer.health;

            var beginningPlayerHealth = player.health;
            computer.attack(player);
            var playerDamage = beginningPlayerHealth - player.health;

            var turnResult = {
                firstAttacker: player.name,
                firstAction: selectedAction,
                firstDamage: computerDamage,
                firstDefender: computer.name,
                secondAttacker: computer.name,
                secondAction: "attack",
                secondDamage: playerDamage,
                secondDefender: player.name
            };  

            showTurnStatus(turnResult);
            checkForWinner(player, computer);
        }
    }

    //
    // checkForWinner
    // Description: The characters fight to the death!
    //
    function checkForWinner(player, computer){

        showGameStatus(player, computer);
        if (!computer.isAlive()) {
            declareWinner(player, true);
            return;
        }

        if (!player.isAlive()) {
            declareWinner(computer, false);
            return;
        }

        // no winner, do it all again
        promptUserForUserAction(player, computer);
    }


    //
    // START THE GAME
    //
    $('#startBtn').click(function() {
        var knight = new Knight();
        var dragon = new Dragon();
        promptUserForCharacter(knight, dragon);

    });

});