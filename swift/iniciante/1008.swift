import Foundation

if let inputA = readLine(), let inputB = readLine(), let inputC = readLine(),
   let employeeNumber = Int(inputA),
   let workedHours = Int(inputB),
   let hourlyRate = Double(inputC.replacingOccurrences(of: ",", with: "."))
{
    let salary = Double(workedHours) * hourlyRate

    print("NUMBER = \(employeeNumber)")
    print(String(format: "SALARY = U$ %.2f", salary))
}
