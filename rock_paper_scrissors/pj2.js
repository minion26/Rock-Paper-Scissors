const user1ChoiceDisplay = document.getElementById('user1-choice');
const user2ChoiceDisplay = document.getElementById('user2-choice');
const displayResult = document.getElementById('result');
const possibleChoices1 = document.querySelectorAll('button');
const possibleChoices2 = document.querySelectorAll('input')
let sw = 0
let user1Choice
possibleChoices1.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    user1Choice = e.target.id;
    sw = 1
    //user1ChoiceDisplay.innerHTML = user1Choice;
    //generateComputerChoice()
    //getResult()
}))

let user2Choice
possibleChoices2.forEach(choice => choice.addEventListener('click', (j) => {
    user2Choice = j.target.id;

    // user2ChoiceDisplay.innerHTML = user2Choice;
    // user1ChoiceDisplay.innerHTML = user1Choice;
    getResult()
}))

let result

function getResult(){

    if(user1Choice === user2Choice)
    {
        result = "its a draw"
    }

    if(user1Choice === "rock" && user2Choice === "paper")
    {
        result = "user2 wins"
    }

    if(user1Choice === "rock" && user2Choice === "scissors")
    {
        result = "user1 wins"
    }

    if(user1Choice === "paper" && user2Choice === "rock")
    {
        result = "user1 wins"
    }

    if(user1Choice === "paper" && user2Choice === "scissors")
    {
        result = "user2 wins"
    }

    if(user1Choice === "scissors" && user2Choice === "paper")
    {
        result = "user1 wins"
    }

    if(user1Choice === "scissors" && user2Choice === "rock")
    {
        result = "user2 wins"
    }

    if ( sw == 0 )
        alert("user 1 doesnt exist, please play with the computer")
    else {
        user2ChoiceDisplay.innerHTML = user2Choice;
        user1ChoiceDisplay.innerHTML = user1Choice;
    }
    displayResult.innerHTML = result
}
