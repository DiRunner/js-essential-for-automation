"use strict";

/**
 * process.cwd()
 * 
 * @usecase
 * 1. Get the current working dir
 * 
 * @scenario
 * 1. Return value of cwd()
 * 2. Different between __dirname
 * 3. Get a path of life in project dir
 * 
 * @rule
 * Wherever you issue the node command, that becomes the cwd()
 */

console.log(process.cwd()); // where the node command is passed
console.log(__dirname); // The file where it is currently settings
console.log(`${process.cwd()}/data/sampleData.json`);