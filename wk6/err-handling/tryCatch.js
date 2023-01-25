"use strict";

const helper = require("./throwDemo")

/**
 * Try...catch demo
 * 
 */

let filepath = ''

try {
    let filepath = `${process.cwd()}/data/sampleDataCopy.json`;
    let data = helper.readFile(filepath)
    let dataObject = JSON.parse(data)
    console.log(dataObject);    
} catch (error) {
    console.log(`I can handle the error...`);   
    
    /**
     * Retry
     * Log the error msg move
     * Custom error
     */

    console.log(typeof error);
    console.log(error.name);
    console.log(error.message);
    let customErr = `Error reading the file: ${filepath}. ${error}`
    throw customErr
}
