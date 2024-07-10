import inquirer from "inquirer";
import chalk from "chalk"



// Generating random number
const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Guess Number " + randomNumber )

// Getting user input
const answers = await inquirer.prompt([
    {name: "userGuessedNumber",
    type: "number",
    message:"Please guess a number between from 1 to 10: "

    },

]);

// Applying logic to check user input number
if (answers.userGuessedNumber === randomNumber) {
    console.log("You have guessed the correct number")
} else {
    console.log("You have guessed the wrong number")
}