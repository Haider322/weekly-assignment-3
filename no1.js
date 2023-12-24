"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
Object.defineProperty(exports, "__esModule", { value: true });
function inserting(arr, index, value) {
    let modifiedArray = [...arr];
    modifiedArray.splice(index, 0, value);
    return modifiedArray;
}
let O_Array = [1, 2, 3, 4, 5];
let index = 5;
let value = 6;
let modifiedArray = inserting(O_Array, index, value);
console.log("the Original array is:", O_Array);
console.log("and the Modified array is:", modifiedArray);
