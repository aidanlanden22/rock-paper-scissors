// key value pairing of all valid moves and the move they beat
const moveOptions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Randomly select a move choice for the computer
function getComputerChoice() {
  const choices = Object.keys(moveOptions); // Get list of valid moves
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
  const losingMove = moveOptions[playerChoice]; //Lookup
  if (!losingMove) {
    // Check for valid input, prompt for another choice if invalid
    return playRound(
      prompt("Please enter a valid move option of Rock, Paper, or Scissors")
    );
  }

  if (computerChoice == playerChoice) {
    // Computer and player tie, prompt for another choice
    return playRound(prompt("Woah! Its a tie! Lets go again "));
  }

  if (computerChoice == losingMove) {
    // Computer loses to player
    return "You win! " + playerChoice + " beats " + computerChoice;
  }

  return "You lose! " + computerChoice + " beats " + playerChoice; // Player loses to computer
}

function game() {
  var playerWins = 0;
  var result;

  for (i = 0; i < 5; i++) {
    const playerChoice = result
      ? prompt(result + "\n\nRock! Paper! Scisscors! Shoot! ")
      : prompt(
          "Lets play rock paper scissors! Best of 5 wins!\n\nRock! Paper! Scisscors! Shoot! "
        );
    // If player clicks cancel, end the game gracefully
    if (!playerChoice) {
      return;
    }

    result = playRound(playerChoice.toLowerCase());
    playerWins += result.includes("win") ? 1 : 0;
  }

  if (playerWins == 3) {
    window.alert("You won 3 out of 5!  You're the big winner!!");
  } else {
    window.alert("I won 3 out of 5!  Better luck next time");
  }
}

game();
