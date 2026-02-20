const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean).map(Number));

  if (values.length >= 3) {
    const A = values[0];
    const B = values[1];
    const C = values[2];
    let largestNumber = A;

    if (B > largestNumber) {
      largestNumber = B;
    }

    if (C > largestNumber) {
      largestNumber = C;
    }

    console.log(`${String(largestNumber)} eh o maior`);
    rl.close();
  }
});
