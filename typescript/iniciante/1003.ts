import { bold, green } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const A = Number(prompt("Digite o primeiro número (A):"));
const B = Number(prompt("Digite o segundo número (B):"));

console.log(green(`SOMA = ${bold(String(A + B))}`));
