const container = document.querySelector("#container");
const buttons = document.querySelectorAll(".choice");
const scoreState = document.querySelector(".score-state");
const currentState = document.createElement("p");
const currentScore = document.createElement("p");
const playAgain = document.querySelector(".play-again");

currentState.classList.add("currentState");
scoreState.appendChild(currentState);

currentScore.classList.add("currentScore");
currentScore.style.color = "rgb(200, 65, 50)";
currentScore.style.fontWeight = "600";
scoreState.appendChild(currentScore);

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1)
        return "Rock";
    else if (choice == 2)
        return "Paper";
    else if (choice == 3)
        return "Scissors";
    else
        return "Error";
}

function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound((button.id.charAt(0).toUpperCase() + button.id.slice(1)), getComputerChoice());
            displayWinner(humanScore, computerScore);
        });
    });
}

function playRound(humanChoice, computerChoice) {
    scoreState.style.display = "block";
    if (humanChoice == "Scissors" && computerChoice == "Paper" || humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock") {
        currentState.textContent = "You picked " + humanChoice + ". The Computer picked " + computerChoice + ". " + humanChoice + " beats " + computerChoice + "!";
        currentScore.textContent = `Current score: You: (${++humanScore}) vs. (${computerScore}) Computer`;
        } else if (humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Scissors" && computerChoice == "Rock" || humanChoice == "Paper" && computerChoice == "Scissors") {
        currentState.textContent = "You picked " + humanChoice + ". The Computer picked " + computerChoice + ". " + computerChoice + " beats " + humanChoice + "!";
        currentScore.textContent = `Current score: You: (${humanScore}) vs. (${++computerScore}) Computer`;
        } else if (humanChoice == "Rock" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Paper") {
        currentState.textContent = "You picked " + humanChoice + ". The Computer picked " + computerChoice + ". It's a tie!";
        currentScore.textContent = `Current score: You: (${humanScore}) vs. (${computerScore}) Computer`;
        } else {
        currentState.textContent ="Oops, something went wrong. Let's try again.";
        }
}

function displayWinner(humanScore, computerScore) {
    if (humanScore == 5 && computerScore < 5) {
        currentScore.textContent = `Final score: You: (${humanScore}) vs. (${computerScore}) Computer. You win!`;
        buttons.forEach((button) => {
            button.disabled = true;
            playAgain.style.display = "inline";
        });
    } else if (computerScore == 5 && humanScore < 5) {
        currentScore.textContent = `Final score: You: (${humanScore}) vs. (${computerScore}) Computer. Computer wins!`;
        buttons.forEach((button) => {
            button.disabled = true;
            playAgain.style.display = "inline";
        });
    };
};