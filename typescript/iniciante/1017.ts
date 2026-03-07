import { bold, cyan } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const tempo = Number(prompt("Digite o tempo (horas):"));
const velocidade = Number(prompt("Digite a velocidade média (km/h):"));

const distancia = tempo * velocidade;
const litros = distancia / 12;

console.log(cyan(bold(litros.toFixed(3))));
