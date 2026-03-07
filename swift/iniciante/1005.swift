import Foundation

if let inputA = readLine(), let inputB = readLine(),
   let A = Double(inputA.replacingOccurrences(of: ",", with: ".")),
   let B = Double(inputB.replacingOccurrences(of: ",", with: "."))
{
    let weightA = 3.5
    let weightB = 7.5

    let average = (A * weightA + B * weightB) / (weightA + weightB)

    print(String(format: "MEDIA = %.5f", average))
}
