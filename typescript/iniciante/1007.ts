import { bold, magenta } from "./../colors/colors";

const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());
const D = Number(prompt());

const difference = (A * B) - (C * D);

console.log(magenta(`DIFERENCA = ${bold(String(difference))}`));
