import Foundation

if let input = readLine()?.split(separator: " ").map({ Int($0) }) {
    if input.count >= 3, let A = input[0], let B = input[1], let C = input[2] {
        let largestNumber = max(A, B, C)
        print("\(largestNumber) eh o maior")
    }
}
