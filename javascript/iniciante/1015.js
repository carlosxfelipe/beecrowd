function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 4) {
    const X1 = Number(values[0]);
    const Y1 = Number(values[1]);
    const X2 = Number(values[2]);
    const Y2 = Number(values[3]);
    const distance = calculateDistance(X1, Y1, X2, Y2);
    console.log(distance.toFixed(4));
    rl.close();
  }
});
