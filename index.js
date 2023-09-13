let computerScore = 0;
let playerScore = 0;
const roundResult = document.querySelector('#roundResult');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');

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
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
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
    roundResult.textContent = result;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    return `${result}.\nScore : Computer ${computerScore} - Player ${playerScore}`;
}
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', function() {
    console.log(playRound(this.id));
}))
