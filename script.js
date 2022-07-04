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
        return "It's a draw!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a draw!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock") {
            playerSelection = "rock";
            playRound();
        }
        if (button.id == "paper") {
            playerSelection = "paper";
            playRound();
        }
        if (button.id == "scissors") {
            playerSelection = "scissors";
            playRound();
        }
    });
});
