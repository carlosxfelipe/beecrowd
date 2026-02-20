import { bold, yellow } from "./../fmt/colors";

const inputA = prompt("Digite A:");
const inputB = prompt("Digite B:");

const A = Number(inputA);
const B = Number(inputB);

const sum = A + B;
console.log(yellow(`X = ${bold(String(sum))}`));
