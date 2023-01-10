"use strict";

/**
 * Extract string by spit method 
 * @rule
 * 1. the separator(strin | regexp) is omitted from the returned array
 * 2. If the very first/last char is provided as a separator, it adds an empty string as in the first/last positions
 * 
 * @returns
 * string []
 */

/**
 * Scenario
 * 1. Get only the date part of the timestamp
 * 2. Split by space/first of last char 
 * 3. Get only the filename 
 */

let tstamp = "2022-02-26T10:51:52:2872";
let str = "Hello World"
let filename = "invoke_123.pdf"

//1. Get only the date part of the timestamp

let dateOnly = tstamp.split("T")
console.log(dateOnly[0]);

//2. Split by space/first of last char 

let splitStr = str.split(" ")
console.log(splitStr);

splitStr = str.split("H")
console.log(splitStr);

splitStr = str.split("d")
console.log(splitStr);

// 3. Get only the filename 

let file = filename.split(".")
console.log(file[0]);

