#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
var user_answer = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
var fromAmount = currency[user_answer.from];
var toAmount = currency[user_answer.to];
var amount = user_answer.amount;
var baseAmount = amount / fromAmount; // USD base currency
var convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
