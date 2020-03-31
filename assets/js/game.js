// this creates a function names "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
// create function
var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
    // check emeny's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " healthy left.");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerhealth and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked. 
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
    // check player health
    if (playerHealth <=0) {
        window.alert(playerName + " had died!");
    }
    else {
        window.alert(playerName + " still had " + playerHealth + " health left.");
    }

};

// execute function
fight();