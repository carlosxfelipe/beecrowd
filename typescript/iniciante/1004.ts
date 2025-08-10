import { bold, yellow } from "./../colors/colors";

const A = Number(prompt());
const B = Number(prompt());

console.log(yellow(`PROD = ${bold(String(A * B))}`));
