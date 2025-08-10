import { bold, red } from "./../colors/colors";

const input = (prompt() ?? "").split(" ").map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

const largestNumber = Math.max(A, B, C);

console.log(red(`${bold(String(largestNumber))} eh o maior`));
