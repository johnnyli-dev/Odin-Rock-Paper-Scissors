function getComputerChoice() {
    let randnum = Math.floor(Math.random() * 3) + 1;
    if (randnum === 1) {
        return 'rock'
    } else if (randnum === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie! You both chose rock"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Rock Beats Paper"
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie! You both chose paper"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Rock"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "It's a tie! You both chose scissors"
    } else {
        return "Invalid Input!"
    }    
}

function game() {
    for (let i = 0; i <5; i++) {
        console.log(playRound(prompt("Choose Rock Paper or Scissors"), getComputerChoice()));
    }
}

game();