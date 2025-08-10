import { bold, green } from "./../colors/colors";

const totalDistanceTraveled = Number(prompt());
const totalFuelConsumed = Number(prompt()?.replace(",", "."));

const averageConsumption = totalDistanceTraveled / totalFuelConsumed;

console.log(green(`${bold(averageConsumption.toFixed(3))} km/l`));
