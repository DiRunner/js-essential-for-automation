/**
 * Folder operations
 * 
 * @rule
 * fs module expects a full path (not relative)
 * @methods
 * 1. existsSync
 * 2. mkdirSync
 * 3. rmdirSync
 * 4. readdirSync
 * 
 * @scenario
 * 1. Check if dir exist
 * 2. if exist, delete (old results). If not exists, creat (screenshot)
 * 3. Get files and sub folder of a dir
 */

const fs = require("fs")

let reportExists = fs.existsSync(`${process.cwd()}/allure-reports`) //true
let resultExists = fs.existsSync(`${process.cwd()}/screenshots`) // false

console.log(`Report exists?: ${reportExists}`);
console.log(`Result exists?: ${resultExists}`);

// delete
if(reportExists){
    fs.rmdirSync(`${process.cwd()}/allure-reports`)
}

// create
if(!reportExists){
    fs.mkdirSync(`${process.cwd()}/allure-reports`)
}

// Read sub-dir /files from a folder
let resArr = fs.readdirSync(`${process.cwd()}/data`)
console.log(resArr);




