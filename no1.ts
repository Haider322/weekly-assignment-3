// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.



function inserting(arr: number[], index: number, value:number) {
    
    let modifiedArray = [...arr];
    modifiedArray.splice(index, 0, value);

    return modifiedArray;
}


let O_Array: number[] = [1, 2, 3, 4, 5];
let index: number = 5;
let value: number = 6;

let  modifiedArray:number[]= inserting(O_Array, index, value);

console.log("the Original array is:", O_Array);
console.log("and the Modified array is:", modifiedArray);

export{}