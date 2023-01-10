"use strict"

/**
 * Annonymous function (function expression)
 * @scenario
 * 1. function without name is assigned to a variable
 * 2. function with name is assigned to a variables
 * 
 * @usage
 * In callback context (a function that requires another function at its argument)
 * 
 */

// 1. function without name is assigned to a variable

let addTwoNumber = function (num1, num2){
    return num1 + num2
 }

console.log(typeof addTwoNumber);
console.log(addTwoNumber(2, 3));

// 2. function with name is assigned to a variables

let someFunction = function addTwoNum (num1, num2){
    return num1 + num2
 }

 console.log(typeof someFunction);
 console.log(someFunction(2, 3));