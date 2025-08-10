import { bold, yellow } from "./../colors/colors";

const sellerName = prompt(); // não usado, apenas para manter igual ao enunciado
const fixedSalary = Number(prompt());
const totalSales = Number(prompt());

const commissionRate = 0.15;
const commission = totalSales * commissionRate;
const totalToReceive = fixedSalary + commission;

console.log(yellow(`TOTAL = R$ ${bold(totalToReceive.toFixed(2))}`));
