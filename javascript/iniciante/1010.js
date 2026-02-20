const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 6) {
    const itemCode1 = Number(values[0]);
    const itemQuantity1 = Number(values[1]);
    const itemUnitPrice1 = Number(values[2]);
    const itemCode2 = Number(values[3]);
    const itemQuantity2 = Number(values[4]);
    const itemUnitPrice2 = Number(values[5]);
    const totalValue =
      itemQuantity1 * itemUnitPrice1 + itemQuantity2 * itemUnitPrice2;
    console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`);
    rl.close();
  }
});
