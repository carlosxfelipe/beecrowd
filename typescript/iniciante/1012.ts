import { blue, bold } from "./../fmt/colors";

const input = (
  prompt("Digite os valores A, B e C separados por espaço:") ?? ""
).split(" ");
const A = Number(input[0]?.replace(",", "."));
const B = Number(input[1]?.replace(",", "."));
const C = Number(input[2]?.replace(",", "."));

const pi = 3.14159;

const triangleArea = (A * C) / 2.0;
const circleArea = pi * Math.pow(C, 2);
const trapezoidArea = ((A + B) * C) / 2.0;
const squareArea = Math.pow(B, 2);
const rectangleArea = A * B;

console.log(blue(`TRIANGULO: ${bold(triangleArea.toFixed(3))}`));
console.log(blue(`CIRCULO: ${bold(circleArea.toFixed(3))}`));
console.log(blue(`TRAPEZIO: ${bold(trapezoidArea.toFixed(3))}`));
console.log(blue(`QUADRADO: ${bold(squareArea.toFixed(3))}`));
console.log(blue(`RETANGULO: ${bold(rectangleArea.toFixed(3))}`));
