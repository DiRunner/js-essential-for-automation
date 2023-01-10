"use strict";

/**
 * Promise
 * 
 * @scenario
 * 1. Initialise a promise object
 * 2. Pending, fulfilled and rejected status
 * 3. How to get a resolved and rejected value? -then()...catch()
 * 4. UnhandledPromiseRejection error
 * 5. Promise chaining 
 */

let myPromiseObj = new Promise((resolve, reject) => {
    console.log('Executing the promise..');
    if(1 > 2){
        setTimeout(() => {
            resolve("Promise is resolved and you got a API data...") // Async action that returns some value after 2 secs 
        }, 2000)  
    } else {
        reject('Oh no ! some error ocurred in promise')
    }      
})

// Consuming the promise
// myPromiseObj.then((res) => {
//     console.log(res);
//     return `${res} Update with more value`
// }).then((updatedVal) => {
//     console.log(updatedVal);
// })
// .catch((err) => {
//     console.log(err);
// })


// using async and await
async function getData(){
    try {
        let res = await myPromiseObj
        console.log(res)        
    } catch (error) {
        console.log(error);
    }    
}

getData()
