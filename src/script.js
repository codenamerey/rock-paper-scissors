let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;

let resultMessage = document.getElementById('result-message');
let _playerScore = document.getElementById('playerScore');
let _computerScore = document.getElementById('computerScore');
let weapons = document.querySelectorAll('.weapon');
let currentWeapon = '';

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playOneRound(playerSelection,  computerSelection) {
    let result;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == computerSelection) {
        result = "It's a tie!";
    }

    else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        )

        {
            computerScore++;
            _computerScore.textContent = computerScore;
            result = `${computerSelection} beats ${playerSelection}! Too bad!`;
        }

    else if (
        (playerSelection == 'Rock') ||
        (playerSelection == 'Paper') ||
        (playerSelection == 'Scissors')
    ){
        playerScore++;
        _playerScore.textContent = playerScore;
        result = `You win! ${playerSelection} beats ${computerSelection}!`   
    }
    
    else {
        result = 'Invalid input.';
    }
    return result;
}

function displayWinner() {
    if (playerScore > computerScore) {
        resultMessage.textContent = "You Win! You beat the computer!";
    }

    else {
        resultMessage.textContent = "You lost. Maybe computers will take over us one day after all.";
    }
}

function game() {
    let playerSelection = currentWeapon;
    let computerSelection = getComputerChoice();
    resultMessage.textContent = playOneRound(playerSelection, computerSelection);

    if((playerScore == winnerScore || computerScore == winnerScore)) {
        displayWinner();
    }

    
}

weapons.forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
        currentWeapon = e.target.textContent;
        console.log(currentWeapon);
        game();
    });
});