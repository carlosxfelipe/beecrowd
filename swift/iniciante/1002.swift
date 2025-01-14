import Foundation

if let input = readLine(), let raio = Double(input.replacingOccurrences(of: ",", with: ".")) {
  let pi = 3.14159

  let area = pi * pow(raio, 2)

  print(String(format: "A=%.4f", area))
} else {
  print("Entrada inválida")
}
