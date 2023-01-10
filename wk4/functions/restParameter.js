"use strict";

/**
 * 
 * @definition
 * 1. the rst param is denoted by ..<paramName>
 * the rest parameter syntax allows us to represent and indefinite number of arguments as an array
 * 
 * 2. arguments object made vailable withing the cfunction body
 * 3. the arguments can be access by array-like notation arguments[i]
 * 4. It has a length property 
 * 
 */

 function sum (num1, num2, ...numN){
    console.log(arguments);
    console.log(arguments[2]);
    console.log(arguments.length);
    let sum = 0
    for (const iterator of arguments) {
        sum += iterator
    }
    return sum
 }

 console.log(sum(2, 2, 3, 5, 12)); 

 
