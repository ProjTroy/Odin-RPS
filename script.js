let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = computerPlay();

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection == "rock" && computerSelection == "rock") {
        alert ("It's a draw!");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        alert ("It's a draw!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert ("It's a draw!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert ("You Lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert ("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert ("You Win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert ("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert ("You Lose! Rock beats scissors");
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert ("You Win! Scissors beats Paper");
        playerScore++;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock") {
            computerSelection = computerPlay();
            playerSelection = "rock";
            playRound(playerSelection, computerSelection);
            updateScore();
            console.log("computer: " + computerSelection);
        } else if (button.id == "paper") {
            computerSelection = computerPlay();
            playerSelection = "paper";
            playRound(playerSelection, computerSelection);
            updateScore();
            console.log("computer: " + computerSelection);
        } else if (button.id == "scissors") {
            computerSelection = computerPlay();
            playerSelection = "scissors";
            playRound(playerSelection, computerSelection);
            updateScore();
            console.log("computer: " + computerSelection);
        }
    });
});

function updateScore() {
    const pScore = document.getElementById("playerScore");
    const cScore = document.getElementById("computerScore");

    if (playerScore == 5) {
        pScore.textContent = `Player Wins!`;
    } else if (computerScore == 5) {
        cScore.textContent = `Computer Wins!`;
    } else if (playerScore < 5 || computerScore < 5) {
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${computerScore}`;
    }
    
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}

const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
    resetGame();
});
