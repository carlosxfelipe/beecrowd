import { bold, magenta } from "./../fmt/colors";

function calculateSphereVolume(radius: number): number {
  const pi = 3.14159;
  const volume = (4.0 / 3.0) * pi * Math.pow(radius, 3);
  return volume;
}

const radius = Number(prompt("Digite o raio da esfera:")?.replace(",", "."));
const sphereVolume = calculateSphereVolume(radius);

console.log(magenta(`VOLUME = ${bold(sphereVolume.toFixed(3))}`));
