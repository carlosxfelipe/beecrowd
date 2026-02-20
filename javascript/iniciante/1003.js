const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 2) {
    const A = Number(values[0]);
    const B = Number(values[1]);
    console.log(`SOMA = ${String(A + B)}`);
    rl.close();
  }
});
