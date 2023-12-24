// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers: number[]): number[] {
    
    const nonNegativeNumbers = numbers.filter(num => num >= 0)
    return nonNegativeNumbers
}

const numbersArray: number[] = [1, -2, 3, -4, 5, -6]
const resultArray: number[] = removeNegativeNumbers(numbersArray)
console.log("Original array:", numbersArray)
console.log("Array after removing negative numbers:", resultArray)




export{}