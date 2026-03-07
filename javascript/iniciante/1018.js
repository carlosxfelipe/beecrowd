const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  const N = parseInt(line.trim());
  let restante = N;

  const notas = [100, 50, 20, 10, 5, 2, 1];

  console.log(N);

  for (const nota of notas) {
    const qtd = Math.floor(restante / nota);
    restante = restante % nota;
    console.log(`${qtd} nota(s) de R$ ${nota},00`);
  }

  rl.close();
});
