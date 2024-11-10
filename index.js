const title = document.querySelector(".title");
const hscore = document.querySelector(".h");
const cscore = document.querySelector(".c");
const buttons = Array.from(document.querySelectorAll("button"));

function getComputerChoice () {
    let choice = Math.random() * 3;
    if (choice > 2) {
        return "rock";
    } else if (choice > 1) {
        return "paper";
    }
    return "scissors";
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let status = "lose";
    if (humanChoice === computerChoice) {
        title.textContent = `Tied, both player choose ${computerChoice}`;
        status = "tie";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            title.textContent = "You win! Rock beats Scissors";
            status = "win";
        } else {
            title.textContent = "You lose! Paper beats Rock";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            title.textContent = "You win! Paper beats Rock";
            status = "win";
        } else {
            title.textContent = "You lose! Scissors beats Paper";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            title.textContent = "You win! Scissors beats Paper";
            status = "win";
        } else {
            title.textContent = "You lose! Rock beats Scissors";
        }
    }
    if (status === "win") {    
        hscore.textContent = (Number(hscore.textContent) + 1).toString();
    } else if (status === "lose") {
        cscore.textContent = (Number(cscore.textContent) + 1).toString();
    }

    if (hscore.textContent === "5") {
        title.textContent = "Human has won!"
        buttons.forEach(ele => ele.remove());
    }
    if (cscore.textContent === "5") {
        title.textContent = "Computer has won!"
        buttons.forEach(ele => ele.remove());
    }
}

buttons.forEach((ele) => {
    let choice = ele.textContent;
    ele.addEventListener("click", () => playRound(choice, getComputerChoice()));
})

console.log(title.innerHTML);