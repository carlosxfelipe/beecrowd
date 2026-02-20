const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 1) {
    const radius = Number(values[0]);
    const pi = 3.14159;
    const area = pi * Math.pow(radius, 2);
    console.log(`A=${area.toFixed(4)}`);
    rl.close();
  }
});
