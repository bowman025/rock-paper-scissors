function getComputerChoice() {
    if (Math.floor(Math.random() * 3) === 0)
        return("Rock");
    else if (Math.floor(Math.random() * 3) === 1)
        return("Paper");
    else 
        return("Scissors");
    }

console.log(getComputerChoice());

sign = prompt("Pick One: Rock, Paper or Scissors");

function getHumanChoice() {
    if (sign === "Rock")
        return("Rock");
    if (sign === "Paper")
        return("Paper");
    if (sign === "Scissors")
        return("Scissors");
    else
        return("Invalid Response");
}

console.log(getHumanChoice())

let computerScore = 0;
let humanScore = 0;

