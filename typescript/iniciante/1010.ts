import { bold, cyan } from "./../fmt/colors";

const input1 = prompt("Peça 1 (código quantidade preço):")?.split(" ") ?? [];
const itemCode1 = Number(input1[0]);
const itemQuantity1 = Number(input1[1]);
const itemUnitPrice1 = Number(input1[2]?.replace(",", "."));

const input2 = prompt("Peça 2 (código quantidade preço):")?.split(" ") ?? [];
const itemCode2 = Number(input2[0]);
const itemQuantity2 = Number(input2[1]);
const itemUnitPrice2 = Number(input2[2]?.replace(",", "."));

const totalValue =
  itemQuantity1 * itemUnitPrice1 + itemQuantity2 * itemUnitPrice2;

console.log(cyan(`VALOR A PAGAR: R$ ${bold(totalValue.toFixed(2))}`));
