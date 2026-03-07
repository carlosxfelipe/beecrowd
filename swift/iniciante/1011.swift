import Foundation

func calculateSphereVolume(radius: Double) -> Double {
    let pi = 3.14159
    let volume = (4.0 / 3.0) * pi * pow(radius, 3)
    return volume
}

if let input = readLine(), let radius = Double(input.replacingOccurrences(of: ",", with: ".")) {
    let sphereVolume = calculateSphereVolume(radius: radius)

    print(String(format: "VOLUME = %.3f", sphereVolume))
}
