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
  showCpChoice.textContent = `${computerChoice}`;
  return computerChoice;
}

//keep track of the scores
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const playerChoiceDiv = document.querySelector('div.player-choice');
const computerChoiceDiv = document.querySelector("div.computer-choice");
const playerScoreDiv = document.querySelector("div.player-score");
const computerScoreDiv = document.querySelector("div.computer-score");
const explanationPara = document.querySelector("p#explanationPara");
const explanationParaValue = document.querySelector("p#explanationPara").innerHTML;
const showCpChoice = document.querySelector("p.showCpChoice");
const showPlChoice = document.querySelector("p.showPlChoice");
const playerScoreBoard = document.querySelector("p.playerScoreBoard");
const computerScoreBoard = document.querySelector("p.computerScoreBoard");

//create Elements outside of functions otherwise these elements will get more than 1 HTML Element displayed on webpage.
const explanation = document.createElement("p");

//despite which button is clicked addEvent Listener
//this addEventListener plays a round when clicked
buttons.forEach( function(button) {
  button.addEventListener("click",
  //handleEvent func should contain the values of playRound func parameters
    function handleEvent(){
      // getPlCho func gets each time clicked new value
      function getPlayerChoice() {
        let playerChoice = button.id;
        console.log(`Player choice is: ${playerChoice}`);
        showPlChoice.textContent = `${playerChoice}`;
        return playerChoice;
      }
      //call the values after each click
      let plChoice = getPlayerChoice();
      let cpChoice = getComputerChoice();

      function createExplanation() {
        const resultOfRound = playRound(cpChoice, plChoice);
        explanationPara.textContent = `${resultOfRound}`;
        console.log(resultOfRound);
        return explanationPara;
      }
      createExplanation();

      function displayScore() {
        playerScoreBoard.textContent = `${playerScore}`;       
        computerScoreBoard.textContent = `${computerScore}`;
      }
      displayScore();

      //check scores for the end result
      function resetValues(){
        if (playerScore === 5) {
          window.alert("The winner is Player");
          computerScore = 0;
          playerScore = 0;
          playerScoreBoard.textContent = "0";
          computerScoreBoard.textContent = "0";
          showCpChoice.textContent = "?";
          showPlChoice.textContent = "?";
          explanationPara.innerHTML = explanationParaValue;
        } else if (computerScore === 5) {
          window.alert("The Winner is Computer");
          computerScore = 0;
          playerScore = 0;
          playerScoreBoard.textContent = "0";
          computerScoreBoard.textContent = "0";
          showCpChoice.textContent = "?";
          showPlChoice.textContent = "?";
          explanationPara.innerHTML = explanationParaValue;
        }
      }
      resetValues();
    }
  );
})


//2 parameters- the function for a round
//conditional statements to check for a winner or draw
//increment winner's score

function playRound(computerSelection, playerSelection) {

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
    return "Scissors beat paper \n The winner of the round is: Player!";
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

