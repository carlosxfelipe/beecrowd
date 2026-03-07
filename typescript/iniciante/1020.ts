import { bold, yellow } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const N = Number(prompt("Digite a quantidade de dias:"));
let restante = N;

const anos = Math.floor(restante / 365);
restante = restante % 365;
const meses = Math.floor(restante / 30);
const dias = restante % 30;

console.log(yellow(`${bold(String(anos))} ano(s)`));
console.log(yellow(`${bold(String(meses))} mes(es)`));
console.log(yellow(`${bold(String(dias))} dia(s)`));
