var playerWins = 0;
var computerWins = 0;
var roundCounter = 0;

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
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie! You both chose rock"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWins++;
        roundCounter++;
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        roundCounter++;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++;
        roundCounter++;
        return "You Win! Rock Beats Paper"
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie! You both chose paper"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        roundCounter++;
        return "You Lose! Scissors beats Rock"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWins++;
        roundCounter++;
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        roundCounter++;
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "It's a tie! You both chose scissors"
    }
}





const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundDisplay = document.querySelector(".RoundCounter");
const popUp = document.querySelector(".popup");
const popUpButton = document.querySelector(".popupButton");

rock.addEventListener("click", function() {
    console.log(playRound('rock', getComputerChoice()));
    roundDisplay.innerHTML = "Round: " + roundCounter;
});
paper.addEventListener("click", function() {
    console.log(playRound('paper', getComputerChoice()));
    roundDisplay.innerHTML = "Round: " + roundCounter;
});
scissors.addEventListener("click", function() {
    console.log(playRound('scissors', getComputerChoice()));
    roundDisplay.innerHTML = "Round: " + roundCounter;
});



function openPopup() {
    popUp.classList.add("open-popup");
}

function closePopup() {
    popUp.classList.remove("open-popup");
    popUp.classList.add("close-popup");
}


popUpButton.addEventListener('click', closePopup);
openPopup();
console.log("pop");