import { blue, bold } from "./../fmt/colors";

const A = Number(prompt("Digite a primeira nota (A):")?.replace(",", "."));
const B = Number(prompt("Digite a segunda nota (B):")?.replace(",", "."));
const C = Number(prompt("Digite a terceira nota (C):")?.replace(",", "."));

const weightA = 2.0;
const weightB = 3.0;
const weightC = 5.0;

const average =
  (A * weightA + B * weightB + C * weightC) / (weightA + weightB + weightC);

console.log(blue(`MEDIA = ${bold(average.toFixed(1))}`));
