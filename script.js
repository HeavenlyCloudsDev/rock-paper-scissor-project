
// CREATE a new function for the computers choice
// WRITE a return code inside of the function declaration to return either string values: rock, paper, or scissors
//     Look into how to get a Math.random method to work for a string
// TEST to see if it will return the strings that were intended



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else (computerChoice === 2) 
        return "Scissors";
    }


    console.log(getComputerChoice());


//CREATE a new function for the human choice
//WRITE a code where the human/ user can enter their choice and return what they have put into the prompt
//TEST to see if it will return the input using the function name
//TEST 1 returned an undefined so I need to define choices?
//TEST 2 gave an ReferenceError saying that humanChoice is not defined
//TEST 3 the getHumanChoice function is still not working properly, it always returns Rock
//TEST 4 successful!


function getHumanChoice() {
    let humanChoice = prompt("Rock,Paper, Scissors?");
    return humanChoice;
    //removed everything and inside of the function I assigned human choice to the prompt and asked it to return it in the console.log
}

console.log(getHumanChoice());


// DECLARE the player score variables
// CREATE two new variables for the human score and the computer score in global scope
//INIT both of the variables to have the value of 0 



const humanScore = 0;
const computerScore = 0;

console.log(humanScore);
console.log(computerScore);

//changed the name in the first code block from randomIndex to computerChoice, made more sense.



