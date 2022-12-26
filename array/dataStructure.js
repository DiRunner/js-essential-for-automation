'use strict';

/**
 * Different Data Structure
 * 
 * @scenarios
 * 
 * 1. Same type of data
 * 2. Different type of data
 * 3. Array containing an object
 * 4. Array containing and array
 */

// 1. same type of data
let arr = ['Apple', 'Orange', 'Banana']

// 2. Different type of data

let arr2 = [1, 'two', true]

console.log(`total elements: ${arr.length}`);

// 3. Array containing and object

let arr3 = [{
        name: 'Rob',
        age: 25
    },
    {
        name: 'Diego',
        age: 32
    }
];

console.log(arr3);
console.log(`total elements: ${arr3.length}`);

// 4. Array containing and array

let arr4 = [
    [1, 2, 3], 
    ['one', 'two', 'three']
];

console.log(arr4);
console.log(`total elements: ${arr4.length}`);


