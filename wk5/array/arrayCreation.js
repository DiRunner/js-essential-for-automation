"Use strict";

/**
 * Array creation - different options
 * 
 * @options
 * 1. Literals (most commonly used)
 * 2. Constructor function
 * 3. Object creation using new keyword
 * 
 */

// 1. Literasl 

let arr = ['appel', 'berry', 'banana'];

// 2. constructor function

let arr2 = Array('appel', 'berry', 'banana');

// 3. Object creation

let arr3 = new Array('appel', 'berry', 'banana');

//Check

console.log(arr);
console.log(arr[1]);
console.log(typeof arr);
console.log(arr.constructor);

console.log(arr2);
console.log(arr2[1]);
console.log(typeof arr2);
console.log(arr2.constructor);

console.log(arr3);
console.log(arr3[1]);
console.log(typeof arr3);
console.log(arr3.constructor);