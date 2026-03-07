import { bold, brightGreen } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const N = Number(prompt("Digite o tempo em segundos:"));
let restante = N;

const horas = Math.floor(restante / 3600);
restante = restante % 3600;
const minutos = Math.floor(restante / 60);
const segundos = restante % 60;

console.log(brightGreen(bold(`${horas}:${minutos}:${segundos}`)));
