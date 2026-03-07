import { bold, magenta } from "https://deno.land/std@0.224.0/fmt/colors.ts";

function calculateSphereVolume(radius: number): number {
  const pi = 3.14159;
  const volume = (4.0 / 3.0) * pi * Math.pow(radius, 3);
  return volume;
}

const radius = Number(prompt("Digite o raio da esfera:")?.replace(",", "."));
const sphereVolume = calculateSphereVolume(radius);

console.log(magenta(`VOLUME = ${bold(sphereVolume.toFixed(3))}`));
