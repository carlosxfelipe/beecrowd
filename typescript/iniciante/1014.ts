import { bold, green } from "./../fmt/colors";

const totalDistanceTraveled = Number(
  prompt("Digite a distância total percorrida (Km):"),
);
const totalFuelConsumed = Number(
  prompt("Digite o total de combustível gasto (litros):")?.replace(",", "."),
);

const averageConsumption = totalDistanceTraveled / totalFuelConsumed;

console.log(green(`${bold(averageConsumption.toFixed(3))} km/l`));
