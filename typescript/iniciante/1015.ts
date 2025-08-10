import { bold, cyan } from "./../colors/colors";

function readCoordinates(): [number, number] {
  const components = (prompt() ?? "").split(" ");
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

const [X1, Y1] = readCoordinates();
const [X2, Y2] = readCoordinates();

const distance = calculateDistance(X1, Y1, X2, Y2);

console.log(cyan(bold(distance.toFixed(4))));
