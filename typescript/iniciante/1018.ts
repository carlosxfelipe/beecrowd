import { bold, magenta } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const N = Number(prompt("Digite um valor inteiro:"));
let restante = N;

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(magenta(bold(String(N))));

for (const nota of notas) {
  const qtd = Math.floor(restante / nota);
  restante = restante % nota;
  console.log(magenta(`${qtd} nota(s) de R$ ${bold(String(nota))},00`));
}
