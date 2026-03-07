import { bold, cyan } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const input = prompt("Digite o raio:");
const radius = Number(input?.replace(",", "."));

const pi = 3.14159;
const area = pi * Math.pow(radius, 2);

console.log(cyan(`A=${bold(area.toFixed(4))}`));
