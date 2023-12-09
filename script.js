//3 choices allowed
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  }
  console.log(`Computer choice is: ${computerChoice}`);
  return computerChoice;
}
//2 parameters- the function for a round
//conditional statements to check for a winner or draw
//increment winner's score
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return "Result of the round: DRAW!";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    return "Paper beats rock \n The winner of the round is: Player!";
  } else if (
    computerSelection === "computerSelection === rock" &&
    playerSelection === "scissors"
  ) {
    computerScore++;
    return "Rock beats scissors \n The winner of the round is: Computer!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    return "Paper beats rock \n The winner of the round is: Computer!";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    return "Scissors beat paper \n The winner of the round is Player!";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    return "Rock beats scissors \n The winner of the round is: Player!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    return "Scissors beat paper \n The winner of the round is: Computer!";
  } else {
    return "Use only allowed choices: ROCK, PAPER OR SCISSORS!";
  }
}
//keep track of the scores
let playerScore = 0;
let computerScore = 0;

//check scores for the end result
if (playerScore === computerScore) {
  console.log("The game after 5 rounds ends in DRAW");
} else if (playerScore > computerScore) {
  console.log("The Winner is Player");
} else {
  console.log("The Winner is Computer");
}
