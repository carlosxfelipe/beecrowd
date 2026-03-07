import Foundation

if let input = readLine(), let N = Int(input) {
    var restante = N

    let horas = restante / 3600
    restante = restante % 3600
    let minutos = restante / 60
    let segundos = restante % 60

    print("\(horas):\(minutos):\(segundos)")
}
