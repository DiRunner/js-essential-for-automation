/**
 * conditional statemes uses cases:
 */

// Use case 2: jus if (NOT) - checking for falsy values
let data = "hello"
if(!data) throw Error(">>> No valid data provided")

// Use case 4.... Nested conditions... Act based on list of conditions

let err = "DataValidation"

if(err === 2){
    console.log(">> Retry...");
} else if(err === "AssertionError"){
    console.log('>> Fail the test')
} else if(err === 'DataValidation'){
    console.log(">> Read the test data File... ");
} else {
    console.log(">> Print the error message");
}

// Use case 6: if in loops

for(let i =1; i<=10; i++){
    if(i === 6) break
    console.log(i);
}