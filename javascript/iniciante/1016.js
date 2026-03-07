const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const distance = parseInt(line.trim());
  const minutes = distance * 2;
  console.log(`${minutes} minutos`);
  rl.close();
});
