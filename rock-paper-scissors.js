function getComputerChoice() {
    if (Math.random() <= 0.333)
        return("Rock");
    else if (Math.random() >= 0.334 <= 0.666)
        return("Paper");
    else 
        return("Scissors");
    }

sign = prompt("Pick One: Rock, Paper or Scissors.").toLowerCase();

function getHumanChoice() {
    if (sign === "rock")
        return("Rock");
    if (sign === "paper")
        return("Paper");
    if (sign === "scissors")
        return("Scissors");
    else
        return("Invalid Response");
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou win! Rock beats Scissors." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou lose! Paper beats Rock." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou win! Scissors beats Paper." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou lose! Rock beats Scissors." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou lose! Scissors beats Paper." + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + ++computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nIt's a tie!" + "\nCurrent score: You " + "(" + humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You picked " + humanChoice + "." + "\nThe computer picked " + computerChoice + "." + "\nYou win! Paper beats Rock." + "\nCurrent score: You " + "(" + ++humanScore + ")" + " vs. " + "(" + computerScore + ")" + " Computer.")
        }
    else {
        console.log("Sorry, I got confused. Let's try again.")
        }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
