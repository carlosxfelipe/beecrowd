import { bold, green } from "./../fmt/colors";

const employeeNumber = Number(prompt("Digite o número do funcionário:"));
const workedHours = Number(prompt("Digite a quantidade de horas trabalhadas:"));
const hourlyRate = Number(
  prompt("Digite o valor recebido por hora:")?.replace(",", "."),
);

const salary = workedHours * hourlyRate;

console.log(green(`NUMBER = ${bold(String(employeeNumber))}`));
console.log(green(`SALARY = U$ ${bold(salary.toFixed(2))}`));
