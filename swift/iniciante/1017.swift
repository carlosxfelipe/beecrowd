import Foundation

if let inputA = readLine(), let inputB = readLine(),
   let tempo = Double(inputA.replacingOccurrences(of: ",", with: ".")),
   let velocidade = Double(inputB.replacingOccurrences(of: ",", with: "."))
{
    let distancia = tempo * velocidade
    let litros = distancia / 12

    print(String(format: "%.3f", litros))
}
