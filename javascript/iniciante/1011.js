function calculateSphereVolume(radius) {
  const pi = 3.14159;
  const volume = (4.0 / 3.0) * pi * Math.pow(radius, 3);
  return volume;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 1) {
    const radius = Number(values[0]);
    const sphereVolume = calculateSphereVolume(radius);
    console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);
    rl.close();
  }
});
