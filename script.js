let humanScore = 0
let computerScore = 0

function startGame() {
    const options = document.getElementById("options")
    const isHidden = getComputedStyle(options).display === "none"
    options.style.display = isHidden ? "flex" : "none"
}

function getHumanChoice(button) {
    const choice = button.textContent.trim().toLowerCase()
    // alert("You picked " + choice)
    return choice
}

function getComputerChoice() {
    const x = Math.random()
    if (x < 0.37) {
        console.log("computer chose: rock")
        return "rock"
    } else if (x < 0.67) {
        console.log("computer chose: paper")
        return "paper"
    } else {
        console.log("computer chose: scissors")
        return "scissors"
    }
}
let round = 0
function playRound(event) {
    const button = event.target.closest("button")
    if (!button) return

    const humanChoice = getHumanChoice(button)
    const computerChoice = getComputerChoice()
    const roundsLog = document.querySelector("div.results")

    let message = ""
    const maxWins = 5 
    

    if( humanScore < 6 || computerScore < 6){
        round += 1
        if (humanChoice === computerChoice) {
        message = "It's a draw!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore += 1
            message = "You Win!"
        } else {
            computerScore += 1
            message = "You Lose!"
        }
        const runningScore = document.querySelector("div.score")
        runningScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`

        const div = document.createElement("div")
        div.textContent =  `Round ${round}: ${message}`
        roundsLog.appendChild(div)

    }
    
    if (humanScore == maxWins){
        alert("You Win")
        setTimeout(() => {
        alert("Game is restarting");
        }, 2000);
        window.location.href = window.location.href
    } else if (computerScore == maxWins){
        alert("You Lose")
        setTimeout(() => {
        alert("Game is restarting");
        }, 3000);
        window.location.href = window.location.href
    }

    

    

    
}

