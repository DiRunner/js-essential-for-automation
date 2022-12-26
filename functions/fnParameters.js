"user strict";

/**
 * Function parameter
 * 
 * @secenario
 * 1. Default param
 * 2. Passing undefines/any falsy values if not known 
 * 3. Passing primitives, objetc types as arg
 * 
 */

// 1. Default param 

function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Rob")

// 2. Passing undefines/any falsy values if not known 

function printFullname(fname, mname, lname){
    if(mname){
        console.log(`the fullname is: ${fname} ${mname} ${lname}`);
    } else {
        console.log(`the fullname is: ${fname} ${lname}`);
    }
}

printFullname("Diego", "", "Corredor")

// 3. Passing primitives, objetc types as arg

function printFullname2 (personObj){
    console.log(`the fullname is: ${personObj.firstname} ${personObj.lastname}`);
}

printFullname2({
    firstname: "Diego",
    lastname: "Corredor"
})