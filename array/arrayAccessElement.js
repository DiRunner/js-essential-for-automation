'use strict';

/**
 * Array traversal and accessing elements
 * 
 * @scenarios
 * 
 * 1. Access and inner object property
 * 2. Access an inner array elements
 * 3. Access elements across different object (by finding the path)
 * 
 * @note
 * 
 * 1. Use [] to access an array's elements
 * 2. use dot (.) for object in most cases
 */

// Array containing and object

let arr1 = [{
        name: 'Rob',
        age: 25
    },
    {
        name: 'Diego',
        age: 32
    }
];

console.log(arr1[1]); // prints the second object
console.log(arr1[1].age); //32


// Array containing and array

let arr2 = [
    [1, 2, 3], 
    ['one', 'two', 'three']
];

console.log(arr2[1][2]); //three

