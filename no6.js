"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers) {
    const nonNegativeNumbers = numbers.filter(num => num >= 0);
    return nonNegativeNumbers;
}
const numbersArray = [1, -2, 3, -4, 5, -6];
const resultArray = removeNegativeNumbers(numbersArray);
console.log("Original array:", numbersArray);
console.log("Array after removing negative numbers:", resultArray);
