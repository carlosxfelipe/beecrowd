import Foundation

if let inputA = readLine(), let inputB = readLine(), let inputC = readLine(),
   let A = Double(inputA.replacingOccurrences(of: ",", with: ".")),
   let B = Double(inputB.replacingOccurrences(of: ",", with: ".")),
   let C = Double(inputC.replacingOccurrences(of: ",", with: "."))
{
    let weightA = 2.0
    let weightB = 3.0
    let weightC = 5.0

    let average = (A * weightA + B * weightB + C * weightC) / (weightA + weightB + weightC)

    print(String(format: "MEDIA = %.1f", average))
}
