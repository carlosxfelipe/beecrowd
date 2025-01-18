import Foundation

let input = readLine()!.split(separator: " ").map { String($0) }
let A = Double(input[0].replacingOccurrences(of: ",", with: "."))!
let B = Double(input[1].replacingOccurrences(of: ",", with: "."))!
let C = Double(input[2].replacingOccurrences(of: ",", with: "."))!

let pi = 3.14159

let triangleArea = (A * C) / 2.0
let circleArea = pi * pow(C, 2)
let trapezoidArea = ((A + B) * C) / 2.0
let squareArea = pow(B, 2)
let rectangleArea = A * B

print(String(format: "TRIANGULO: %.3f", triangleArea))
print(String(format: "CIRCULO: %.3f", circleArea))
print(String(format: "TRAPEZIO: %.3f", trapezoidArea))
print(String(format: "QUADRADO: %.3f", squareArea))
print(String(format: "RETANGULO: %.3f", rectangleArea))
