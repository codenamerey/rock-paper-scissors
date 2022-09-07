let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;

let resultMessage = document.getElementById('result-message');
let _playerScore = document.getElementById('playerScore');
let _computerScore = document.getElementById('computerScore');
let weapons = document.querySelectorAll('.weapon');
let restart_b = document.querySelector('.restart');
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

    if(hasWon()) {
        displayWinner();
        restart_b.style.display = 'block';
        restart_b.addEventListener('click', restartGame);
    }

    
}

function restartGame() {
    restart_b.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    _playerScore.textContent = '0';
    _computerScore.textContent = '0';
    playerSelection = '';
    resultMessage.textContent = 'Play a game of rock, paper, scissors with the JS Bot!';
}

function hasWon() {
    if((playerScore == winnerScore || computerScore == winnerScore)) {
        return true;
    }

    return false;
}

function removeClass(e) {
    e.target.classList.remove('clicked');
}

weapons.forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
        e.target.classList.add('clicked');
        currentWeapon = e.target.textContent.trim();
        console.log(e);
        if (hasWon()) {
            return;
        }
        game();
        
    });

    weapon.addEventListener('transitionend', removeClass);
});