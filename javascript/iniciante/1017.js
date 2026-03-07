const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const values = [];

rl.on("line", (line) => {
  values.push(...line.trim().split(/\s+/).filter(Boolean));

  if (values.length >= 2) {
    const tempo = Number(values[0]);
    const velocidade = Number(values[1]);
    const distancia = tempo * velocidade;
    const litros = distancia / 12;
    console.log(litros.toFixed(3));
    rl.close();
  }
});
