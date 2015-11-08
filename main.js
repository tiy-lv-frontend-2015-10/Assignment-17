$( document ).ready(function() {


    //
    // GAME OBJECTS
    //


    //
    // Character object
    // Description: This is the object that represents a character in the game
    //
    function Character (name, health, weapon) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;

        this.isAlive = function(){
            return this.health > 0; 
        }

        this.attack = function attack(opponent) {
            var weaponDamage = this.weapon.damage();
            opponent.health = opponent.health - weaponDamage;
            console.log(this.name + " just attacked " + opponent.name + " for " + weaponDamage + " points!");
            console.log(opponent.name + "'s health is now " + opponent.health);
            console.log("");
        };
    };

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
    function declareWinner(player){
        alert(player.name + " is the winner!!");
    }

    //
    // playGame
    // Description: The characters fight to the death!
    //
    function playGame(){
        var selectedCharacter = $( "#characterSelect option:selected" ).val();
        if (selectedCharacter.toLowerCase() === "knight"){
            var player = knight;
            var computer = dragon;
        }
        else {
            var player = dragon;
            var computer = knight;
        }

        while (player.isAlive() && computer.isAlive()) {
            player.attack(computer);
            if (!computer.isAlive()){
                declareWinner(player);
                break;
            }

            computer.attack(player);
            if (!player.isAlive()){
                declareWinner(computer);
                break;
            }
        }
        
    }

    
    //
    // promptUserForCharacter
    // Description: Asks the user which character to be
    //
    function promptUserForCharacter(){

        // render user prompt for character with mustache
        var data = {characters: [knight, dragon]}
        var characterPromptTemplate = $("#characterPromptTemplate").text();
        var characterHtml = Mustache.render(characterPromptTemplate, data);
        $("#user-prompt").html(characterHtml);

        $("#choiceBtn").click(playGame);
       
    }


    //
    // START THE GAME
    //

    // our characters 
    var sword = new Weapon("Sword", 0, 20);
    var knight = new Character("Knight", 50, sword);

    var flame = new Weapon("Flame", 0, 10);
    var dragon = new Character("Dragon", 100, flame);

    promptUserForCharacter();
});