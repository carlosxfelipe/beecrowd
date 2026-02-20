import { bold, yellow } from "./../fmt/colors";

const A = Number(prompt("Digite o primeiro número (A):"));
const B = Number(prompt("Digite o segundo número (B):"));

console.log(yellow(`PROD = ${bold(String(A * B))}`));
