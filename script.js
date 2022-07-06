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
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert ("You Win! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert ("You Win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert ("You Lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert ("You Lose! Rock beats scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert ("You Win! Scissors beats Paper");
    }
}

let playerSelection = "";
let computerSelection = computerPlay();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock") {
            computerSelection = computerPlay();
            playerSelection = "rock";
            playRound(playerSelection, computerSelection);
            console.log("computer: " + computerSelection);
        } else if (button.id == "paper") {
            computerSelection = computerPlay();
            playerSelection = "paper";
            playRound(playerSelection, computerSelection);
            console.log("computer: " + computerSelection);
        } else if (button.id == "scissors") {
            computerSelection = computerPlay();
            playerSelection = "scissors";
            playRound(playerSelection, computerSelection);
            console.log("computer: " + computerSelection);
        }
    });
});
