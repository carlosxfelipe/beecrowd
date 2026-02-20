const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 4) {
    const A = Number(values[0]);
    const B = Number(values[1]);
    const C = Number(values[2]);
    const D = Number(values[3]);
    const difference = A * B - C * D;
    console.log(`DIFERENCA = ${String(difference)}`);
    rl.close();
  }
});
