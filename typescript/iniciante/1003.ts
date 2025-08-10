import { bold, green } from "./../colors/colors";

const A = Number(prompt("Digite o primeiro número (A):"));
const B = Number(prompt("Digite o segundo número (B):"));

console.log(green(`SOMA = ${bold(String(A + B))}`));
