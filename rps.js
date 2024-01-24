// key value pairing of all valid moves and the move they beat
const moveOptions = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

// Randomly select a move choice for the computer
function getComputerChoice() {
    const choices = Object.keys(moveOptions); // Get list of valid moves
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
    const losingMove = moveOptions[playerChoice.toLowerCase()]; //Lookup 
    console.log("computer " + computerChoice);
    console.log("player: " + playerChoice);
    if(!losingMove) { // Check for valid input, prompt for another choice if invalid
        return playRound(prompt("Please enter a valid move option of Rock, Paper, or Scissors"));
    }

    if(computerChoice.toLowerCase() == playerChoice) { // Computer and player tie, prompt for another choice
        return playRound(prompt("Woah! Its a tie! Lets go again "))
    }

    if(computerChoice.toLowerCase() == losingMove) { // Computer loses to player
        return "You win! " + playerChoice + " beats " + computerChoice;
    }

    return "You lose! " + computerChoice + " beats " + playerChoice; // Player loses to computer
}

console.log(playRound(prompt("Rock! Paper! Scisscors! Shoot! ")));