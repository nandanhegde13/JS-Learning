//nested if

let winningNumber = 19;
let userGuess = prompt("Guess a number");

console.log(userGuess)
if(Number(userGuess) === winningNumber)
{
    console.log("Win")
}

else if(Number(userGuess) < winningNumber)
{
    console.log("Guessed low")
}
else if(Number(userGuess) > winningNumber)
{
    console.log("Gussed high11")
}

else{
    console.log("Invalid");
}





