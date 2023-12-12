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
  const showCpChoice = document.createElement('p');
  showCpChoice.textContent = `${computerChoice}`;
  computerChoiceDiv.appendChild(showCpChoice);
  return computerChoice;
}

const buttons = document.querySelectorAll('button');
const playerChoiceDiv = document.querySelector('div.player-choice');
const computerChoiceDiv = document.querySelector("div.computer-choice");
const explanationDiv = document.querySelector("div.explanation");
const roundWinnerDiv = document.querySelector("div.round-winner");
const playerScoreDiv = document.querySelector("div.player-score");
const computerScoreDiv = document.querySelector("div.computer-score");

//despite which button is clicked addEvent Listener
//this addEventListener plays a round when clicked
buttons.forEach( function(button) {
  button.addEventListener("click",
  //handleEvent func should contain the values of playRound func parameters
    function handleEvent(){
      // getPlCho func gets each time clicked new value
      function getPlayerChoice() {
        let playerSelection = button.id;
        console.log(`Player choice is: ${playerSelection}`);
        const showPlChoice = document.createElement('p');
        showPlChoice.textContent = `${playerSelection}`;
        playerChoiceDiv.appendChild(showPlChoice);
        return playerSelection;
      }
      //call the values after each click
      let plChoice = getPlayerChoice();
      let cpChoice = getComputerChoice();

      function createExplanation(){
        const explanation = document.createElement('p');
        const resultOfRound = playRound(cpChoice, plChoice);
        explanation.textContent = `${resultOfRound}`;
        explanationDiv.appendChild(explanation);
        console.log(resultOfRound);
        return explanation;
      }
      createExplanation();
    }
  );
})


//2 parameters- the function for a round
//conditional statements to check for a winner or draw
//increment winner's score

function playRound(computerSelection, playerSelection) {
  function displayScore() {
    const playerScorePara = document.createElement("p");
    playerScorePara.textContent = `Player score \n ${playerScore}`;
    playerScoreDiv.appendChild(playerScorePara);

    const computerScorePara = document.createElement("p");
    computerScorePara.textContent = `Computer score \n ${computerScore}`;
    computerScoreDiv.appendChild(computerScorePara);
  }

  displayScore();
  if (computerSelection === playerSelection) {
    return "Result of the round: DRAW!";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    console.log(playerScore);
    return "Paper beats rock \n The winner of the round is: Player!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    console.log(computerScore);
    return "Rock beats scissors \n The winner of the round is: Computer!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    console.log(computerScore);
    return "Paper beats rock \n The winner of the round is: Computer!";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    console.log(playerScore);
    return "Scissors beat paper \n The winner of the round is Player!";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    console.log(playerScore);
    return "Rock beats scissors \n The winner of the round is: Player!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    console.log(computerScore);
    return "Scissors beat paper \n The winner of the round is: Computer!";
  } else if (
    playerSelection !== "rock" ||
    playerSelection !== "paper" ||
    playerSelection !== "scissors"
  ) {
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
