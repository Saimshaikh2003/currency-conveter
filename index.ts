#! /usr/bin/env node
import inquirer from "inquirer"
const currency: any = {
    USD: 1,
    EUR: 1.19,
    GBP: 0.76,
    IND: 1.72,
    PKR: 290,

};

let user_answer = await inquirer.prompt([
    {
    name:'from',
    message: 'Enter your currency',
    type: 'list',
    choices: [ 'USD', 'EUR', 'GBP', 'IND', 'PKR']
},

{
    name:'to',
    message: 'Enter your currency',
    type: 'list',
    choices: [ 'USD', 'EUR', 'GBP', 'IND', 'PKR']
},
{
    name: 'amount',
    message: 'Enter your amount',
    type: 'number'
}
])

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)


