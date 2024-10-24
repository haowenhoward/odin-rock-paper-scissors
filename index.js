function getComputerChoice () {
    let choice = Math.random() * 3;
    if (choice > 2) {
        return "rock";
    } else if (choice > 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice () {
    let choice = prompt("Please enter your choice:");
    return choice;
}

function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`Tied, both player choose ${computerChoice}`);
        playRound(getHumanChoice(), getComputerChoice());
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    } else {
        console.log("Invalid move for player");
        playRound(getHumanChoice(), getComputerChoice());
    }
}

for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
}

if (computerScore > humanScore) {
    console.log(`Computer wins! ${computerScore} : ${humanScore}`);
} else {
    console.log(`Human wins! ${humanScore} : ${computerScore}`);
}
}
