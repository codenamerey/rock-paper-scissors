function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playOneRound(playerSelection,  computerSelection) {
    let result;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    if(playerSelection == computerSelection) {
        result = "It's a tie!";
    }

    else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        )

        {
            result = `${computerSelection} beats ${playerSelection}! Too bad!`;
        }

    else if (
        (playerSelection == 'Rock') ||
        (playerSelection == 'Paper') ||
        (playerSelection == 'Scissors')
    ){
        result = `You win! ${playerSelection} beats ${computerSelection}!`
    }
    
    else {
        result = 'Invalid input.';
    }
    return result;
}
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playOneRound();
//     }
// }