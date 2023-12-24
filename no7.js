"use strict";
function calculateSum(numbers) {
    let Sum = 0;
    for (let num of numbers) {
        Sum += num;
    }
    return Sum;
}
const numbersOfArray = [1, 2, 3, 4, 15];
const result = calculateSum(numbersOfArray);
console.log(`The sum of the numbers of the array is: ${result}`);
