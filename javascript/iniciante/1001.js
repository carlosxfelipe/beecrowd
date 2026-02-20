const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());

  if (lines.length === 2) {
    const A = Number(lines[0]);
    const B = Number(lines[1]);
    const sum = A + B;
    console.log(`X = ${String(sum)}`);
    rl.close();
  }
});
