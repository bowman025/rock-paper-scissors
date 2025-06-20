function getComputerChoice() {
    if (Math.random() <= 0.333)
        return("Rock");
    else if (Math.random() >= 0.334 <= 0.666)
        return("Paper");
    else 
        return("Scissors");
    }

/* function getHumanChoice() {
    choice = prompt("Pick One: Rock, Paper or Scissors.").toLowerCase();
    if (choice === "rock")
        return("Rock");
    else if (choice === "paper")
        return("Paper");
    else if (choice === "scissors")
        return("Scissors");
    else
        return("Invalid Response");
} */

let computerScore = 0;
let humanScore = 0;

let buttons = Array.from(document.querySelectorAll("button"));

function getHumanChoice() {
    buttons.forEach((button) => button.addEventListener("click", () => console.log(button.id.charAt(0).toUpperCase() + button.id.slice(1))));
};

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(computerChoice)
console.log(buttons)
console.log(humanChoice);


/* function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou win! Rock beats Scissors." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou lose! Paper beats Rock." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou win! Scissors beats Paper." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou lose! Rock beats Scissors." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou lose! Scissors beats Paper." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe Computer picked " + computerChoice + "." + "\nYou win! Paper beats Rock." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice = "Invalid Response") {
        console.log("You didn't pick one of the three options.")
        }
    else {
        console.log("Sorry, something went wrong. Let's try again.")
        }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
    playRound();
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

playRound(humanChoice, computerChoice) */