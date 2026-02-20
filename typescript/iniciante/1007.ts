import { bold, magenta } from "./../fmt/colors";

const A = Number(prompt("Digite o valor de A:"));
const B = Number(prompt("Digite o valor de B:"));
const C = Number(prompt("Digite o valor de C:"));
const D = Number(prompt("Digite o valor de D:"));

const difference = A * B - C * D;

console.log(magenta(`DIFERENCA = ${bold(String(difference))}`));
