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
    const pi = 3.14159;
    const triangleArea = (A * C) / 2.0;
    const circleArea = pi * Math.pow(C, 2);
    const trapezoidArea = ((A + B) * C) / 2.0;
    const squareArea = Math.pow(B, 2);
    const rectangleArea = A * B;
    console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
    console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
    console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
    console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
    rl.close();
  }
});
