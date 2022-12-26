/**
 * Comparison operator
 * 1. == (check only the value)
 * 2. === (strick equality operator: value + type)
 * 3. !=
 * 4. !==
 * 5. >
 * 6. >=
 * 7. <
 * 8. <=
 * @return boolean
 * 
 * @rule:
 * In most cases, if the two operand are not of the same type, 
 * Javascript attempts to conver them to an apppiate type for the comparison.
 * this behaviour generally results in comparing the operand numerically
 * 
 * 
 */

// Use case 1: Strict equality (===, !==)

let a = "1"
let b = 1

console.log(a == b); //true
console.log(a === b); //false

// Not equal

console.log(a != b); //false
console.log(a !== b); //true

