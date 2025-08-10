import { bold, green } from "./../colors/colors";

const A = Number(prompt());
const B = Number(prompt());

console.log(green(`SOMA = ${bold(String(A + B))}`));
