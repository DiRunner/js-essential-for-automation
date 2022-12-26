"use extrict"

/**
 * Extract substring - use of slice method
 * @rules
 * 1. slice method requires start (inclusive) and en index (en index is not included)
 * 2. you can scpecify only the start index
 * you can specific the negative range 
 *  
 */

/**
 * Scenario
 * 1. Extract only yy-mm-dd format
 * 2. Extract year (4 digits)
 * 3. extract month - 5 index
 * 4. extract date - 8 index
 */

let dt = "2022-02-26"

//1. Extract only yy-mm-dd format
let yymmdd = dt.slice(2)
console.log(yymmdd); 

//2. Extract year (4 digits)
let year = dt.slice(0,4)
console.log(year);

//3. extract month - 5 index
let month = dt.slice(5,7)
console.log(month);

//4. extract date - 8 index

let date = dt.slice(8,10)
console.log(date);
