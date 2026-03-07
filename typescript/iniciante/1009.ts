import { bold, yellow } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const sellerName = prompt("Digite o nome do vendedor:")!; // não usado, mas mantido
const fixedSalary = Number(prompt("Digite o salário fixo:")!.replace(",", "."));
const totalSales = Number(
  prompt("Digite o total de vendas:")!.replace(",", "."),
);

const commissionRate = 0.15;
const commission = totalSales * commissionRate;
const totalToReceive = fixedSalary + commission;

console.log(yellow(`TOTAL = R$ ${bold(totalToReceive.toFixed(2))}`));
