const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());

  if (lines.length >= 3) {
    const sellerName = lines[0];
    const fixedSalary = Number(lines[1]);
    const totalSales = Number(lines[2]);
    const commissionRate = 0.15;
    const commission = totalSales * commissionRate;
    const totalToReceive = fixedSalary + commission;
    console.log(`TOTAL = R$ ${totalToReceive.toFixed(2)}`);
    rl.close();
  }
});
