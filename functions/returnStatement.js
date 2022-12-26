"use strict";

/**
 * Return statemtn
 * 
 * @scenario
 * 1. Return a single primitive value
 * 2. Returns an expression [that evaluates to a value]
 * 3. Return an object type
 * 4. Return a function itself
 * 5. Return statement in conditional statement
 */

 // 1. Return a single primitive value

 function addTwoNum(num1, num2){
    let sum = num1 + num2
    return sum
 }

//2. Returns an expression [that evaluates to a value]

function addTwoNum(num1, num2){
    return num1 + num2
}

//3. Return an object type

function addTwoNum(num1, num2){
    return { total: num1 + num2}
}

//4. Return a function itself

function addTwoNum(num1, num2){
    return function(){
        return num1 + num2
    }
}

let total4 = addTwoNum(2,3)
console.log(total4());


//5. Return statement in conditional statement

function addTwoNum5(num1, num2){
    if (!num1) {
        return
    }
    let sum = num1 + num2
    return sum
 }

let total5 = addTwoNum5(undefined, 3)
console.log(total5);
