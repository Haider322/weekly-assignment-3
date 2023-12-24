function calculateSum(numbers: number[]): number {
    let Sum: number = 0;
    for (let num of numbers) {
        Sum += num;
    }
    return Sum;
}

const numbersOfArray: number[] = [1, 2, 3, 4, 15];
const result: number = calculateSum(numbersOfArray);
console.log(`The sum of the numbers of the array is: ${result}`);
