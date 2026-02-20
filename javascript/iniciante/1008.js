const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 3) {
    const employeeNumber = Number(values[0]);
    const workedHours = Number(values[1]);
    const hourlyRate = Number(values[2]);
    const salary = workedHours * hourlyRate;
    console.log(`NUMBER = ${String(employeeNumber)}`);
    console.log(`SALARY = U$ ${salary.toFixed(2)}`);
    rl.close();
  }
});
