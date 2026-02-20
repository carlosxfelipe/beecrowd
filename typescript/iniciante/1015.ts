import { bold, cyan } from "./../fmt/colors";

function readCoordinates(promptMessage: string): [number, number] {
  const components = (prompt(promptMessage) ?? "").split(" ");
  const x = Number(components[0]?.replace(",", "."));
  const y = Number(components[1]?.replace(",", "."));
  return [x, y];
}

function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const [X1, Y1] = readCoordinates("Digite X1 e Y1 separados por espaço:");
const [X2, Y2] = readCoordinates("Digite X2 e Y2 separados por espaço:");

const distance = calculateDistance(X1, Y1, X2, Y2);

console.log(cyan(bold(distance.toFixed(4))));
