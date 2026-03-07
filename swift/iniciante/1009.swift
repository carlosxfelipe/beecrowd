import Foundation

if let inputA = readLine(),
   let inputB = readLine(),
   let inputC = readLine(),
   let fixedSalary = Double(inputB),
   let totalSales = Double(inputC)
{
    let sellerName = inputA
    _ = sellerName // Ignora o aviso de que 'sellerName' não foi usada
    let commissionRate = 0.15
    let commission = totalSales * commissionRate
    let totalToReceive = fixedSalary + commission

    print(String(format: "TOTAL = R$ %.2f", totalToReceive))
}
