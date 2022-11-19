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

function checkWin() {
    if(playerWins > 4 && playerWins - computerWins == 2) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if(computerWins > 4 && computerWins - playerWins == 2) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}




const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerTotal = document.querySelector(".player");
const computerTotal = document.querySelector(".computer");
rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;

const roundDisplay = document.querySelector(".RoundCounter");
const popUp = document.querySelector(".popup");
const popUpButton = document.querySelector(".popupButton");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
let returnStatement = "";


rock.addEventListener("click", function() {
    returnStatement = playRound('rock', getComputerChoice());
    roundDisplay.innerHTML = "Round: " + roundCounter;
    playerScore.innerHTML = playerWins;
    computerScore.innerHTML = computerWins;
    checkWin();
});
paper.addEventListener("click", function() {
    returnStatement = playRound('paper', getComputerChoice());
    roundDisplay.innerHTML = "Round: " + roundCounter;
    playerScore.innerHTML = playerWins;
    computerScore.innerHTML = computerWins;
    checkWin();
});
scissors.addEventListener("click", function() {
    returnStatement = playRound('scissors', getComputerChoice());
    roundDisplay.innerHTML = "Round: " + roundCounter;
    playerScore.innerHTML = playerWins;
    computerScore.innerHTML = computerWins;
    checkWin();
});



function openPopup() {
    popUp.classList.add("open-popup");
}

function closePopup() {
    popUp.classList.remove("open-popup");
    popUp.classList.add("close-popup");
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}


popUpButton.addEventListener('click', closePopup);
openPopup();
console.log("pop");