import Foundation

func readCoordinates() -> (Double, Double)? {
    guard let input = readLine() else { return nil }
    let components = input.split(separator: " ").map { String($0) }
    guard components.count == 2,
          let x = Double(components[0].replacingOccurrences(of: ",", with: ".")),
          let y = Double(components[1].replacingOccurrences(of: ",", with: "."))
    else {
        return nil
    }
    return (x, y)
}

func calculateDistance(x1: Double, y1: Double, x2: Double, y2: Double) -> Double {
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
}

guard let (X1, Y1) = readCoordinates() else {
    print("Erro na entrada das primeiras coordenadas.")
    exit(1)
}

guard let (X2, Y2) = readCoordinates() else {
    print("Erro na entrada das segundas coordenadas.")
    exit(1)
}

let distance = calculateDistance(x1: X1, y1: Y1, x2: X2, y2: Y2)

print(String(format: "%.4f", distance))
