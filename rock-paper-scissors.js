function getComputerChoice() {
    if (Math.random() <= 0.333)
        return("Rock");
    else if (Math.random() >= 0.334 <= 0.666)
        return("Paper");
    else 
        return("Scissors");
    }


let computerScore = 0;
let humanScore = 0;

let buttons = Array.from(document.querySelectorAll("button"));

function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound((button.id.charAt(0).toUpperCase() + button.id.slice(1)), getComputerChoice());
            displayWinner(humanScore, computerScore);
        });
    });
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(computerChoice)
console.log(buttons)
console.log(humanChoice);


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