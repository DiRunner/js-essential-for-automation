/**
 * Logical Operator
 * 1. &&
 * 2. ||
 * 3. !
 * 
 * two main purposes: 
 * 1. In conditional statements (e.g if ... else)
 * 2. to have a default value
 */

// Use case 1: AND (&&) check if given val is a text 

let val = "Monday"
if(typeof val === "string" && val.length > 1){
    console.log(`Given value: ${val} is valid string`);
}else {
    console.log(`Given value: ${val} is NOT valid string`);
}

// Use case 2: OR (||)

//Check if given day is weekend or not

let day = "Saturday"

if (day === "Saturday" || day === "Sunday"){
    console.log(`The day ${day} is weekend`);
} else {
    console.log(`The day ${day} is NOT weekend`);
}

// Use case 3: NOT (!)

// Check if both first and last name is provides

let firstname = ""
let lastname = "Bob"

if(!firstname || !lastname){
    console.log(`One of the names: ${firstname} or ${lastname} is not a valid`);
}

// OR - default value

let targetBrowser

let browser = targetBrowser || "Chrome"

console.log(browser); //Chrome