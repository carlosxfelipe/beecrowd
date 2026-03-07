import Foundation

if let inputA = readLine(), let inputB = readLine(), let inputC = readLine(),
   let inputD = readLine(),
   let A = Int(inputA),
   let B = Int(inputB),
   let C = Int(inputC),
   let D = Int(inputD)
{
    let difference = (A * B) - (C * D)

    print("DIFERENCA = \(difference)")
}
