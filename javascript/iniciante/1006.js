const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 3) {
    const A = Number(values[0]);
    const B = Number(values[1]);
    const C = Number(values[2]);
    const weightA = 2.0;
    const weightB = 3.0;
    const weightC = 5.0;
    const average =
      (A * weightA + B * weightB + C * weightC) / (weightA + weightB + weightC);
    console.log(`MEDIA = ${average.toFixed(1)}`);
    rl.close();
  }
});
