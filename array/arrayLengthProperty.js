'use strict';

/**
 * lenght property roles
 * 
 * @rules
 * 1. length property returns total index + 1. This does not mean there are that many elements in that object
 * 2. length property can be set manually
 */

// Rule 1

let arr = []
arr[4] = 'Kiwi'
console.log(arr);
console.log(`total elements of arr = ${arr.length}`);

let count = 0
for (let index = 0; index < arr.length; index++){
    if(arr[index]){
        count++
    }
}
console.log('count ', count);

// rule 2

let arr2 = []
arr2.length = 10
console.log(arr2);
console.log(arr2.length);