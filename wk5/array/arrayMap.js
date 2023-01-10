'use strict';

/**
 * Use of map method
 * 
 * @usecase
 * Imagine a case where all members are represented in a string - how to convert them all to number
 * 
 * @approach
 * 1. loop
 * 2. map (easy)
 * 
 * @returns
 * Modify array
 * 
 */

let givenArr = ['123', '25', '566', '122'];

let givenArr2 = ['123', '25', '566', '122'];

// 1. loop

for (let i = 0; i < givenArr.length; i++) {
    givenArr[i] = parseInt(givenArr[i])
}

console.log('givenArr: ', givenArr);

// 2. Map

let newArr = givenArr2.map(element => +element)

console.log('givenArr2: ', givenArr2);

console.log('newArr: ', newArr);
