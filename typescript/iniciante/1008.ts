import { bold, green } from "./../colors/colors";

const employeeNumber = Number(prompt());
const workedHours = Number(prompt());
const hourlyRate = Number(prompt()?.replace(",", "."));

const salary = workedHours * hourlyRate;

console.log(green(`NUMBER = ${bold(String(employeeNumber))}`));
console.log(green(`SALARY = U$ ${bold(salary.toFixed(2))}`));
