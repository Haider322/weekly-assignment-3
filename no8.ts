// implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

function convertion(C: number) {
    return (C * 9/5) + 32;
}

function convertion2(celsiusTemperatures: number[]): number[] {
    const F_Temperatures: number[] = [];

    for (let i = 0; i < celsiusTemperatures.length; i++) {
        let C = celsiusTemperatures[i];
        let F = convertion(C);
        F_Temperatures.push(F);
    }

    return F_Temperatures
}

// Example usage
let C_Temperatures: number[] = [0, 5, 10, 22, 50];
let F_Temperatures: number[] = convertion2(C_Temperatures);

console.log("the Celsius Temperatures are :", C_Temperatures);
console.log("after conversion of celsius to Fahrenheit the Temperatures wiil be:", F_Temperatures);

export{}
