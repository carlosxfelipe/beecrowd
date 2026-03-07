import Foundation

if let input = readLine(), let N = Int(input) {
    var restante = N

    let notas = [100, 50, 20, 10, 5, 2, 1]

    print(N)

    for nota in notas {
        let qtd = restante / nota
        restante = restante % nota
        print("\(qtd) nota(s) de R$ \(nota),00")
    }
}
