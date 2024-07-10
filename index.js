#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Generating random number
const randomNumber = Math.floor(Math.random() * 10 + 1);
// Getting user input
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: chalk.bgBlue("Please guess a number between from 1 to 10: ")
    },
]);
// Applying logic to check user input number
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.greenBright("You have guessed the correct number"));
}
else {
    console.log(chalk.redBright("You have guessed the wrong number"));
}
