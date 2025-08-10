import { blue, bold } from "./../colors/colors";

const A = Number(prompt()?.replace(",", "."));
const B = Number(prompt()?.replace(",", "."));
const C = Number(prompt()?.replace(",", "."));

const weightA = 2.0;
const weightB = 3.0;
const weightC = 5.0;

const average = (A * weightA + B * weightB + C * weightC) /
  (weightA + weightB + weightC);

console.log(blue(`MEDIA = ${bold(average.toFixed(1))}`));
