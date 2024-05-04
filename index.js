#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\t", "============================================================");
console.log(chalk.cyan.bold("\t", "<<<<<<<<<< WELCOME TO SHOAIB'S CURRENCY CONVERTOR >>>>>>>>>>"));
console.log("\t", "============================================================", "\n");
let condition = true;
const currencies = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
while (condition) {
    let userInput = await inquirer.prompt([
        {
            name: "from",
            message: chalk.yellow("\t", "Enter a currency which you want to convert(from)!"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"],
        },
        {
            name: "to",
            message: chalk.yellow("\t", "Enter a currency in which you want to convert(to)!"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"],
        },
        {
            name: "amount",
            message: chalk.blue("\t", "Enter your amount!"),
            type: "number",
        },
    ]);
    let fromAmount = currencies[userInput.from];
    let toAmount = currencies[userInput.to];
    let amount = userInput.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(chalk.red.italic(`\t Your converted amount is = ${convertedAmount.toFixed(2)} \n`));
    let nextQuestion = await inquirer.prompt({
        name: "again",
        message: chalk.green("\t", "Are you want to convert more?"),
        type: "confirm",
        default: "true"
    });
    condition = nextQuestion.again;
}
console.log("\t", "-------------------------------------------------------------");
console.log(chalk.magenta.bold("\t", "<<<<<<<<<<< THANKS FOR USING MY CURRENCY CONVERTOR >>>>>>>>>>"));
console.log("\t", "-------------------------------------------------------------");
