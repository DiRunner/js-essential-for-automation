"use strict";

/**
 * Iterates object properties
 * 
 * @scenario
 * 1. keys()
 * 
 */

let testRunner = "local"
let machineID = ""
let envFile = "test_config"

let reportData = {
    testID: 12345,
    status: "PASS",
    "PASS/FAIL Flag": "PASS",
    totalTest: 100,
    totalPass: 80,
    isInScope: true,
    passrate (){
        return (this.totalPass/this.totalTest) * 100
    },
    runDt: new Date(),
    runner: testRunner,
    macID: machineID ? machineID : "Unknown",
    [envFile] : {
        env: "test",
        url: "http://test.com"        
    }
}

// iterate through all properties

for (let key in reportData){
    
    console.log(`the key: ${key}, and the val: ${JSON.stringify(reportData[key])}`)
}

/** Use of JSON.stringify method
 * [object Object]
 */