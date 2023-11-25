function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        computerChoice = 'rock';
    } else if(computerChoice === 1){
        computerChoice = 'paper';
    } else if(computerChoice === 2){
        computerChoice = 'scissors';
    }
    console.log(`Computer choice is: ${computerChoice}`);
    return computerChoice;
}

function playRound(computerSelection, playerSelection){
    if(computerSelection === playerSelection) {
        return 'Result of the game: DRAW!';
    } else if(computerSelection === 'rock' && playerSelection === 'paper'){
        return 'Paper beats rock \n The winner is: Player!';
    } else if (computerSelection === 'computerSelection === rock' && playerSelection === 'scissors') {
      return 'Rock beats scissors \n The winner is: Computer!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
      return 'Paper beats rock \n The winner is: Computer!';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
      return 'Scissors beat paper \n The winner is Player!';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
      return 'Rock beats scissors \n The winner is: Player!';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
      return 'Scissors beat paper \n The winner is: Computer!';
    } else {
      return 'Use only allowed choices: ROCK, PAPER OR SCISSORS!';
    }
}

let computerChoice = getComputerChoice();
const playerChoice = prompt('Make your choice:').toLowerCase();
console.log(`Player choice is: ${playerChoice}`);

console.log(playRound(computerChoice, playerChoice));