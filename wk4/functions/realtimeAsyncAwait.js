"use strict";

/**
 * Real time use of Async/await using node-fetch npm package
 * 
 * @scenario
 * Get the api response
 * 
 * @url
 * https://api.github.com/users/github
 * 
 * @pointsToRemember
 * 1. Look at the documentation and see if they support promise 
 * 
 */

const fetch = require("node-fetch")

// Async and await
async function getAPIRes(){
    const response = await fetch("https://api.github.com/users/github")
    const data = await response.json()
    console.log(data)
}

getAPIRes()
