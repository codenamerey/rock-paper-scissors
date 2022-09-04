let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;


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
            result = `${computerSelection} beats ${playerSelection}! Too bad!
            Your score is ${playerScore}, computer score is ${computerScore}`;
        }

    else if (
        (playerSelection == 'Rock') ||
        (playerSelection == 'Paper') ||
        (playerSelection == 'Scissors')
    ){
        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}!
        Your score is ${playerScore}, computer score is ${computerScore}`   
    }
    
    else {
        result = 'Invalid input.';
    }
    return result;
}

function displayWinner() {
    if (playerScore > computerScore) {
        console.log("You Win! You beat the computer!");
    }

    else {
        console.log("You lost. Maybe computers will take over us one day after all.");
    }
}

function game() {
    while(!(playerScore == winnerScore || computerScore == winnerScore)) {
        let playerSelection = prompt("Enter your bet (Rock, Paper, Scissors):");
        let computerSelection = getComputerChoice();
        console.log(playOneRound(playerSelection, computerSelection));
    }

    displayWinner();
}

game();