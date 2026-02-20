import { bold, cyan } from "./../fmt/colors";

const input = prompt("Digite o raio:");
const radius = Number(input?.replace(",", "."));

const pi = 3.14159;
const area = pi * Math.pow(radius, 2);

console.log(cyan(`A=${bold(area.toFixed(4))}`));
