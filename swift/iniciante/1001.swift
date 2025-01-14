import Foundation

if let inputA = readLine(), let inputB = readLine(),
  let A = Int(inputA), let B = Int(inputB)
{
  let sum = A + B

  print("X = \(sum)")
} else {
  print("Entrada inválida")
}
