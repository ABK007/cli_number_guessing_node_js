import inquirer from "inquirer";


let number = 12;
// Getting user input
const answers = await inquirer.prompt([
    {name: "userGuessedNumber",
    type: "number",
    message:"Please guess a number: "

    },

]);

// Applying logic to check user input number
if (answers.userGuessedNumber === number) {
    console.log("You have guessed the correct number")
} else {
    console.log("You have guessed the wrong number")
}