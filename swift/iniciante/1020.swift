import Foundation

if let input = readLine(), let N = Int(input) {
    var restante = N

    let anos = restante / 365
    restante = restante % 365
    let meses = restante / 30
    let dias = restante % 30

    print("\(anos) ano(s)")
    print("\(meses) mes(es)")
    print("\(dias) dia(s)")
}
