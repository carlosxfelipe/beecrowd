import Foundation

if let input = readLine(), let radius = Double(input.replacingOccurrences(of: ",", with: ".")) {
    let pi = 3.14159

    let area = pi * pow(radius, 2)

    print(String(format: "A=%.4f", area))
}
