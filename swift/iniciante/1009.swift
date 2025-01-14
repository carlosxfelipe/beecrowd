import Foundation

func readInput(prompt: String = "") -> String {
  while true {
    if !prompt.isEmpty {
      print(prompt, terminator: ": ")
    }
    if let input = readLine(), !input.isEmpty {
      return input
    } else {
      print("Entrada inválida. Por favor, tente novamente.")
    }
  }
}

func readDouble(prompt: String = "") -> Double {
  while true {
    let input = readInput(prompt: prompt)
    let normalizedInput = input.replacingOccurrences(of: ",", with: ".")
    if let doubleValue = Double(normalizedInput) {
      return doubleValue
    } else {
      print("Por favor, insira um número decimal válido (use ',' ou '.').")
    }
  }
}

let sellerName = readInput()
let fixedSalary = readDouble()
let totalSales = readDouble()

let commissionRate = 0.15
let commission = totalSales * commissionRate

let totalToReceive = fixedSalary + commission

print(String(format: "TOTAL = R$ %.2f", totalToReceive))
