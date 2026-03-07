import { bold, yellow } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const distance = Number(prompt("Digite a distância (km):")?.replace(",", "."));
const time = distance * 2;

console.log(yellow(bold(`${time} minutos`)));
