"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
function Factorial(num) {
    if (num < 0) {
        console.log("Input must be a positive integer.");
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let P_Integer = 5;
let result = Factorial(P_Integer);
console.log(`The factorial of ${P_Integer} is: ${result}`);
