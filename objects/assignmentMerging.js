"use strict";

/**
 * Setting up values through assignment operator
 * 1. top level property
 * 2. Inner property
 * 3. Assignment to other obj
 */

 let reportData = {
    status: "PASS",
    previousRun: {
       status: "FAIL",
       runID: 6789
    }
}

//Assignment
reportData.status = "FAIL"
reportData.previousRun.status = "PASS"
reportData["previousRun"]["status"] = "PASS"

//console.log(reportData);

let obj = {}

obj = reportData

console.log(obj);

// Object are mutable