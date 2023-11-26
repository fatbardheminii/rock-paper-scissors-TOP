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

let playerScore = 0;
let computerScore = 0;

for (let round = 1; round < 6; round++) {
  console.log(`Round: ${round}`);
  let computerChoice = getComputerChoice();
  const playerChoice = prompt("Make your choice:").toLowerCase();
  console.log(`Player choice is: ${playerChoice}`);
  console.log(playRound(computerChoice, playerChoice));
  console.log(
    `Player score is: ${playerScore} \n Computer score is: ${computerScore}`
  );
}

if (playerScore === computerScore) {
  console.log("The game after 5 rounds ends in DRAW");
} else if (playerScore > computerScore) {
  console.log("The Winner is Player");
} else {
  console.log("The Winner is Computer");
}
