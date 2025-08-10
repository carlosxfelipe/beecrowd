import { bold, cyan } from "./../colors/colors";

const A = Number(prompt()?.replace(",", "."));
const B = Number(prompt()?.replace(",", "."));

const weightA = 3.5;
const weightB = 7.5;

const average = (A * weightA + B * weightB) / (weightA + weightB);

console.log(cyan(`MEDIA = ${bold(average.toFixed(5))}`));
