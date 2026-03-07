import { bold, cyan } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const A = Number(prompt("Digite a primeira nota (A):")?.replace(",", "."));
const B = Number(prompt("Digite a segunda nota (B):")?.replace(",", "."));

const weightA = 3.5;
const weightB = 7.5;

const average = (A * weightA + B * weightB) / (weightA + weightB);

console.log(cyan(`MEDIA = ${bold(average.toFixed(5))}`));
