// Key value pairing of all valid moves and their reciprocal losing moves
const moveOptions = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
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
    return "Please enter a valid move option of Rock, Paper, or Scissors";
    /*return playRound(
      prompt("Please enter a valid move option of Rock, Paper, or Scissors")
    );*/
  }

  if (computerChoice == playerChoice) {
    // Computer and player tie, prompt for another choice
    return "Woah! Its a tie! Lets go again "
    //return playRound(prompt("Woah! Its a tie! Lets go again "));
  }

  if (computerChoice == losingMove) {
    // Computer loses to player
    playerScore ++;
    return "You win! " + playerChoice + " beats " + computerChoice;
  }
  // Player loses to computer
  computerScore ++;
  return "You lose! " + computerChoice + " beats " + playerChoice; 
}

/*function game() {
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
}*/

const body = document.querySelector('body');
const scoreBoard = document.querySelector('.scoreboard');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;

let playerScoreSpan = document.createElement('span');
let computerScoreSpan = document.createElement('span');

playerScoreSpan.innerText = playerScore;
computerScoreSpan.innerText = computerScore;

playerScoreDisplay.appendChild(playerScoreSpan);
computerScoreDisplay.appendChild(computerScoreSpan);
body.addEventListener('click', event => {
  //check for previous result and remove from the DOM
  let previousResult = document.querySelector('.result');
  if(previousResult) {
    body.removeChild(previousResult)
  }

  if(event.target.tagName != "BUTTON") {
    return;
  }

  let result = playRound(event.target.innerText);
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

  // toggle on display of scoreboard 
  if(scoreBoard.style.display != "flex") {
    scoreBoard.style.display = "flex";
  }

  let div = document.createElement('div');
  div.innerText = result;
  div.classList.add('result');
  body.appendChild(div);

  if(computerScore == 3) {
    let finalResult = document.createElement('div');
    finalResult.innerText = 'Thats best 3 out of 5. I win! Better luck next time'
    body.appendChild(finalResult);
  }

  if(playerScore == 3) {
    let finalResult = document.createElement('div');
    finalResult.innerText = 'Thats best 3 out of 5. you win! Congrats!'
    body.appendChild(finalResult);
  }

})
