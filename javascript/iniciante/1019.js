const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  const N = parseInt(line.trim());
  let restante = N;

  const horas = Math.floor(restante / 3600);
  restante = restante % 3600;
  const minutos = Math.floor(restante / 60);
  const segundos = restante % 60;

  console.log(`${horas}:${minutos}:${segundos}`);
  rl.close();
});
