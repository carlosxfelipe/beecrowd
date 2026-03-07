import { bold, cyan } from "https://deno.land/std@0.224.0/fmt/colors.ts";

const N = Number(prompt("Digite o valor:")?.replace(",", "."));

// Trabalha em centavos para evitar imprecisão de ponto flutuante
let remaining = Math.round(N * 100);

const notas = [
  { cents: 10000, label: "R$ 100.00" },
  { cents: 5000, label: "R$ 50.00" },
  { cents: 2000, label: "R$ 20.00" },
  { cents: 1000, label: "R$ 10.00" },
  { cents: 500, label: "R$ 5.00" },
  { cents: 200, label: "R$ 2.00" },
];

const moedas = [
  { cents: 100, label: "R$ 1.00" },
  { cents: 50, label: "R$ 0.50" },
  { cents: 25, label: "R$ 0.25" },
  { cents: 10, label: "R$ 0.10" },
  { cents: 5, label: "R$ 0.05" },
  { cents: 1, label: "R$ 0.01" },
];

console.log(cyan(bold("NOTAS:")));
for (const { cents, label } of notas) {
  const count = Math.floor(remaining / cents);
  remaining %= cents;
  console.log(cyan(`${bold(String(count))} nota(s) de ${label}`));
}

console.log(cyan(bold("MOEDAS:")));
for (const { cents, label } of moedas) {
  const count = Math.floor(remaining / cents);
  remaining %= cents;
  console.log(cyan(`${bold(String(count))} moeda(s) de ${label}`));
}
