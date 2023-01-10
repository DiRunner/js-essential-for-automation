"use strict";

/**
 * Mergin objects
 * 
 * @usecase
 * Merging two config objects 
 * 
 * @approach
 * 1. Using Object.assign()
 * 2. Using the spread operator
 */

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    c: 4,
    d: 5,
    e: 6
}

// Merging objects

// Approach 1
Object.assign(obj1, obj2) // or let obj3 = Object.assign(obj1, obj2)
console.log(obj1);

// Approach 2

let obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);