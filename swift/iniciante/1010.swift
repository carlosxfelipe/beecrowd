import Foundation

let input1 = readLine()!.split(separator: " ").map { String($0) }
let itemCode1 = Int(input1[0])!
let itemQuantity1 = Int(input1[1])!
let itemUnitPrice1 = Double(input1[2].replacingOccurrences(of: ",", with: "."))!

let input2 = readLine()!.split(separator: " ").map { String($0) }
let itemCode2 = Int(input2[0])!
let itemQuantity2 = Int(input2[1])!
let itemUnitPrice2 = Double(input2[2].replacingOccurrences(of: ",", with: "."))!

let totalValue = Double(itemQuantity1) * itemUnitPrice1 + Double(itemQuantity2) * itemUnitPrice2

print(String(format: "VALOR A PAGAR: R$ %.2f", totalValue))
