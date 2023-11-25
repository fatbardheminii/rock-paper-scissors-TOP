function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        computerChoice = 'rock';
    } else if(computerChoice === 1){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log(`Computer choice is: ${computerChoice}`);
}

function playRound(computerSelection, playerSelection){
    if(computerSelection === playerSelection) {
        return 'Result of the game: DRAW!';
    } else if(computerSelection === 'rock' && playerSelection === 'paper'){
        return 'Paper beats rock \n The winner is: Player!';
    } else if('rock' && playerSelection === 'scissors'){
        return 'Rock beats scissors \n The winner is: Computer!';
    } else if('paper' && playerSelection === 'rock'){
        return 'Paper beats rock \n The winner is: Computer!';
    } else if('paper' && playerSelection === 'scissors'){
        return 'Scissors beat paper \n The winner is Player!';
    } else if('scissors' && playerSelection === 'rock'){
        return 'Rock beats scissors \n The winner is: Player!';
    } else if('scissors' && playerSelection === 'paper'){
        return 'Paper beats scissors \n The winner is: Computer!';
    } else {
        return 'Use only allowed choices: ROCK, PAPER OR SCISSORS!'
    }
}

let computerChoice = getComputerChoice();
const playerChoice = prompt("Make your choice:").toLowerCase();
console.log(`Player choice is: ${playerChoice}`);

console.log(playRound(computerChoice, playerChoice));