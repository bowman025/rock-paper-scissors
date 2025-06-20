const container = document.querySelector("#container");
const buttons = document.querySelectorAll("button");
const scoreState = document.querySelector(".score-state");
const currentState = document.createElement("p");
const currentScore = document.createElement("p");

currentState.classList.add("currentState");
scoreState.appendChild(currentState);

currentScore.classList.add("currentScore");
currentScore.style.color = "salmon";
currentScore.style.fontWeight = "600";
scoreState.appendChild(currentScore);

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    if (Math.random() <= 0.333)
        return("Rock");
    else if (Math.random() >= 0.334 <= 0.666)
        return("Paper");
    else 
        return("Scissors");
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

function result () {
    console.log("Final score: You (" + humanScore + ")" + " vs. (" + computerScore + ") Computer.");
    if (humanScore < computerScore)
        console.log("The Computer won! Better luck next time.")
    else if (humanScore > computerScore)
        console.log("You won! Congratulations!")
    else
        console.log("It's a tie!");
}

playGame ()
result ()

playRound(humanChoice, computerChoice)