#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let exchangeRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.77,
    JPY: 134.25,
    AUD: 1.39,
    CAD: 1.25,
    CHF: 0.93,
    CNY: 6.36,
    SEK: 9.18,
    NZD: 1.45,
    MXN: 20.23,
    SGD: 1.35,
    HKD: 7.84,
    NOK: 8.97,
    KRW: 1233.50,
    TRY: 14.27,
    RUB: 76.32,
    INR: 74.57,
    BRL: 5.24,
    ZAR: 14.92,
    THB: 33.47,
    IDR: 14375.00,
    MYR: 4.15,
    PHP: 52.55,
    PKR: 277.50,
    PLN: 3.98,
    AED: 3.67,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.30,
    OMR: 0.38,
    BHD: 0.37,
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    const convertedAmount = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return convertedAmount.toFixed(1);
}
let userinput = await inquirer.prompt([
    {
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to convert:'
    },
    {
        type: 'list',
        name: 'fromCurrency',
        message: 'Select the currency to convert from:',
        choices: Object.keys(exchangeRates)
    },
    {
        type: 'list',
        name: 'toCurrency',
        message: 'Select the currency to convert to:',
        choices: Object.keys(exchangeRates)
    }
]);
const { amount, fromCurrency, toCurrency } = userinput;
const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
console.log(`converting please wait ${fromCurrency} to ${toCurrency}`);
function time() {
    console.log(` ${chalk.yellow(fromCurrency)} ${chalk.greenBright(amount)} : ${chalk.yellow(toCurrency)} ${chalk.greenBright(convertedAmount)} `);
}
setTimeout(time, 2500);
