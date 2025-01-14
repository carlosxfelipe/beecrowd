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

func readInt(prompt: String = "") -> Int {
  while true {
    let input = readInput(prompt: prompt)
    if let intValue = Int(input) {
      return intValue
    } else {
      print("Por favor, insira um número inteiro válido.")
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

// let employeeNumber = readInt(prompt: "Digite o número do funcionário")
// let workedHours = readInt(prompt: "Digite o número de horas trabalhadas")
// let hourlyRate = readDouble(prompt: "Digite o valor da hora trabalhada")

let employeeNumber = readInt()
let workedHours = readInt()
let hourlyRate = readDouble()

let salary = Double(workedHours) * hourlyRate

print("NUMBER = \(employeeNumber)")
print(String(format: "SALARY = U$ %.2f", salary))
