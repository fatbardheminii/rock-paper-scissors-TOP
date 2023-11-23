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

getComputerChoice();