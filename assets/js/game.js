// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


// this creates a function names "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function(enemyName) {
    while(enemyHealth > 0) {
        // Fight or Skip prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.");
        //if player chooses to fight, then fight();
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " had died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " healthy left.");
            }
            // Subtract the value of 'enemyAttack' from the value of 'playerhealth and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked. 
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
        }
      }
    }
};
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }
// execute function
// fight();