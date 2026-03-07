import { bold, yellow } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const inputA = prompt("Digite A:");
const inputB = prompt("Digite B:");

const A = Number(inputA);
const B = Number(inputB);

const sum = A + B;
console.log(yellow(`X = ${bold(String(sum))}`));
