const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 2) {
    const totalDistanceTraveled = Number(values[0]);
    const totalFuelConsumed = Number(values[1]);
    const averageConsumption = totalDistanceTraveled / totalFuelConsumed;
    console.log(`${averageConsumption.toFixed(3)} km/l`);
    rl.close();
  }
});
