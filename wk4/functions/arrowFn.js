"use strict";

/**
 * Arrow functions
 * 
 * @scenario
 * 1. Convert a normal function to arrow function
 * 2. No params
 * 3. Single param
 * 4. More than one param(single and more than one statements)
 * 5. forEach() method example
 */

//1. Convert a normal function to arrow function

let sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(3, 10));

//2. No params

let alwaysTrue = () => 10 > 5
console.log(alwaysTrue());

//3. Single param
let printName = name => console.log(`Hello, ${name}`);
printName("Diego F.")

//4. More than one param(single and more than one statements)

let sum4 = (num1, num2) => {
    let sum =  num1 + num2
    console.log(sum)
    return sum
}

sum4(10,100)


