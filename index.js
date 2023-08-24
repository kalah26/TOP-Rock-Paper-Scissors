let computerScore = 0;
let playerScore = 0;

//Getting a random choice from the computer by relating each choice to a number from 1 to 3
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = 'Scissors';
            break;
        case 2:
            computerChoice = 'Rock';
            break;
        case 3:
            computerChoice = 'Paper';
            break;
    }
    return computerChoice;
}

//Function which plays a single round of rock-paper-scissor
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
        result = "You lose: Scissors is beaten by Rock";
        computerScore++;
    }
    if ((computerSelection === 'rock') && (playerSelection === 'paper')) {
        result = "You win: Paper beats Rock";
        playerScore++;
    }
    if ((computerSelection === 'paper') && (playerSelection === 'rock')) {
        result = "You lose: Rock is beaten by Paper";
        computerScore++;
    }
    if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {
        result = "You win: Scissors beats paper";
        playerScore++;
    }
    if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
        result = "You lose: Paper is beaten by Scissors";
        computerScore++;
    }
    if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {
        result = "You win: Rock beats Scissors";
        playerScore++;
    }
    if (computerSelection === playerSelection) {
        result = "It's a tie";
        playerScore += 0;
        computerScore += 0;
    }
    return `${result}.\nScore : Computer ${computerScore} - Player ${playerScore}`;
}

//a function which simulates 5 round for a game
function game() {  
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();
        const playerSelection = prompt("Make a choice").toLowerCase();
        console.log(playRound(playerSelection,computerSelection))
    }
    if (computerScore > playerScore) {
        return `You lost the game by ${computerScore} - ${playerScore}`;
    } else if (computerScore < playerScore) {
        return `You won the game by ${playerScore} - ${computerScore}`;
    } else {
        return `You tied the game`;
    }
}
console.log(game()); 
