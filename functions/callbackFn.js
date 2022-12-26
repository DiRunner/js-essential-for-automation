"use strict"

/**
 * How callback functions works 
 */

//Simple function that prints the given message

function printMsg(msg) {
    console.log('calling the callback function...');
    console.log(msg);
}

function greet(name, greeter){
    console.log('calling the main function....');
    let greetMsg = `Hello, ${name}` //Action of async operations
    return greeter(greetMsg)
}

//calling

//option 1:
//greet('Diego', printMsg)

//option 2:
// greet("Sergio", function(val){
//     console.log(`The received value from the main function: ${val}`);
// })

//option 3
let res = greet("Martha", (res)=>{
    return `The received value from the main function: ${res}`;
})

console.log(res);
/**
 * Understanding return statement in callback functions
 */

