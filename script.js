function getComputerChoice(){
    let x = Math.random()
    if (x < 0.37){
        console.log("computer chose: " + "rock")
        return "rock"
    } else if (x < 0.67){
        console.log("computer chose: " + "paper")
        return "paper"
    } else if (x < 1){
        console.log("computer chose: " + "scissors")   
        return "scissors"
    }
    
}  

const prompt = require("prompt-sync")();
let choice = "";
function getHumanChoice(){
    choice = prompt("rock/paper/scissors: "); 
    console.log("you chose: " + choice)
    if (choice == "rock"){
        return "rock"
    } else if (choice == "paper"){
        return "paper"
    } else if (choice == "scissors"){
        return "scissors"
    }
}

let humanScore = 0
let computerScore = 0 

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    switch (humanChoice) {
        case "rock":
            switch(computerChoice){
                case "rock":
                    return console.log("It's a draw");
                case "paper":
                    computerScore += 1
                    return console.log("You lose");
                case "scissors":
                    humanScore += 1
                    return console.log("You win");
            }
        case "paper":
            switch(computerChoice){
                case "rock":
                    humanScore += 1
                    return console.log("You win");
                case "paper":
                    return console.log("It's a draw");
                case "scissors":
                    computerScore += 1
                    return console.log("You lose");
            }
        case "scissors":
            switch(computerChoice){
                case "rock":
                    computerScore += 1
                    return console.log("You lose");
                case "paper":
                    humanScore += 1
                    return console.log("You win");
                case "scissors":
                    return console.log("It's a draw");
            }
        }
}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
    let humanSelection = ""
    let computerSelection = ""
    for (let i = 1; i<6; i++){
        console.log("\n")
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice() 
        playRound(humanSelection, computerSelection)  
    }
    console.log("\n")
    console.log("human score: " + humanScore)
    console.log("computer score: " + computerScore)
    }

playGame()

