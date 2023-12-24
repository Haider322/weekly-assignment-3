"use strict";
// implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
Object.defineProperty(exports, "__esModule", { value: true });
function convertion(C) {
    return (C * 9 / 5) + 32;
}
function convertion2(celsiusTemperatures) {
    const F_Temperatures = [];
    for (let i = 0; i < celsiusTemperatures.length; i++) {
        let C = celsiusTemperatures[i];
        let F = convertion(C);
        F_Temperatures.push(F);
    }
    return F_Temperatures;
}
// Example usage
let C_Temperatures = [0, 5, 10, 22, 50];
let F_Temperatures = convertion2(C_Temperatures);
console.log("the Celsius Temperatures are :", C_Temperatures);
console.log("after conversion of celsius to Fahrenheit the Temperatures wiil be:", F_Temperatures);
