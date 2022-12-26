/**
 * Ternary operator (?)
 * @Syntax:
 * <expression> ? "val1" : "val2"
 */

// Use case: Set log level for different run environment



// Basic use
let runner = "local"
let logLevel = runner === "local" ? "Info" : "Error"
console.log(logLevel); //Info

// Advanced use
let runner2 = "other"
let logLevel2  = runner2 === "local" ? "Info" : runner2 === "cloud" ? "Silent" : "Error"
console.log(logLevel2); //Error
