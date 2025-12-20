// What is the problem? 

// Create a game that allows computer to give a result randomly
// This result is given when the player picks their choice.Create

// WRITE the logic for the computers choice
//     CREATE choices for the computer
//     MAKE the choices random each time 
//     SHOW the computers choice at the same time the user chooses theirs

const computerChoices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * computerChoices.length);
const computerGuess = computerChoices[randomIndex];


console.log(computerGuess);

