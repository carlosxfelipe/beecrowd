const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  const N = parseInt(line.trim());
  let restante = N;

  const anos = Math.floor(restante / 365);
  restante = restante % 365;
  const meses = Math.floor(restante / 30);
  const dias = restante % 30;

  console.log(`${anos} ano(s)`);
  console.log(`${meses} mes(es)`);
  console.log(`${dias} dia(s)`);
  rl.close();
});
