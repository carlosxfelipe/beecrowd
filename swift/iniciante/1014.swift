import Foundation

if let inputA = readLine(), let inputB = readLine(),
   let totalDistanceTraveled = Int(inputA),
   let totalFuelConsumed = Double(inputB.replacingOccurrences(of: ",", with: "."))
{
    let averageConsumption = Double(totalDistanceTraveled) / totalFuelConsumed

    print(String(format: "%.3f km/l", averageConsumption))
}
