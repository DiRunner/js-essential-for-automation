"use strict";

/**
 * Use of indexOf method
 * 
 */

let str = "App # {12345} submitted"

let start = str.indexOf('{')
console.log(start);

let end = str.indexOf('}')
console.log(end);

let substring = str.slice(start + 1, end)
console.log(substring);