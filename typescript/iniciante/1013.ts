import { bold, red } from "./../fmt/colors";

const input = (prompt("Digite três números separados por espaço:") ?? "")
  .split(" ")
  .map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

// const largestNumber = Math.max(A, B, C);

let largestNumber = A;

if (B > largestNumber) {
  largestNumber = B;
}

if (C > largestNumber) {
  largestNumber = C;
}

console.log(red(`${bold(String(largestNumber))} eh o maior`));
