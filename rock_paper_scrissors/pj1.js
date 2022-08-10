const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const displayResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice 
    generateComputerChoice()
    getResult()
}))

let computerChoice
function generateComputerChoice(){
    let arr = ["rock", "paper", "scissors"]
    let computer = Math.random()
    if(computer < 0.33)
        {
            computerChoiceDisplay.innerHTML = "rock"
            computerChoice = "rock"
        }
    else
        if(computer < 0.67)
            {
                computerChoiceDisplay.innerHTML = "paper"
                computerChoice = "paper"
            }
            else
            {
                computerChoiceDisplay.innerHTML = "scissors"
                computerChoice = "scissors"
            }

}

let result
function getResult(){
    if(computerChoice == userChoice)
    {
        result = "its a draw"
    }

    if(computerChoice == "rock" && userChoice == "paper")
    {
        result = "you win"
    }

    if(computerChoice == "rock" && userChoice == "scissors")
    {
        result = "you lost"
    }

    if(computerChoice == "paper" && userChoice == "rock")
    {
        result = "you lose"
    }

    if(computerChoice == "paper" && userChoice == "scissors")
    {
        result = "you win"
    }

    if(computerChoice == "scissors" && userChoice == "paper")
    {
        result = "you lost"
    }

    if(computerChoice == "scissors" && userChoice == "rock")
    {
        result = "you win"
    }

    displayResult.innerHTML = result
}