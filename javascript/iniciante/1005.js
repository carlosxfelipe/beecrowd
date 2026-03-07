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
    const weightA = 3.5;
    const weightB = 7.5;
    const average = (A * weightA + B * weightB) / (weightA + weightB);
    console.log(`MEDIA = ${average.toFixed(5)}`);
    rl.close();
  }
});
