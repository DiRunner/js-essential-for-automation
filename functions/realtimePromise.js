"use strict";

/**
 * Real time use of promise using node-fetch npm package
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

function getAPIRes(){
    fetch("https://api.github.com/users/github").then((res) => {
        return res.json()
    })
    .then(updatedRes => {
        console.log(updatedRes);
    })
    .catch(err => {
        console.log(err);
    })
}

getAPIRes()
