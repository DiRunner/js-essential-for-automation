/**
 * Replace and Replace all
 * @rules:
 * 1. replaces method can accept a string/regexp as its firs arg
 * 
 * @returns
 * the mofied string value
 */

/**
 * Scenario:
 * 1. Get only the filename
 * 2. Rename the file extension from .pdf -> .txt
 * 3. Replace table_name with Accounts
 * 4. Convert the given date format to YYYYMMDD format
 * 
 */

let filename = "invoke_123.pdf";
let query_template = `SELECT * FROM {{table_name}}`
let dt = "2022-01-01";

// 1. get only the filename

let onlyFilename = filename.replace(".pdf", "")

console.log('onlyFilename: ', onlyFilename);

//2. Rename the file extension from .pdf -> .txt

let txtFilename = filename.replace(".pdf", ".txt")

console.log('txtFilename: ', txtFilename);

// 3. Replace table_name with Accounts

let myQuery = query_template.replace("{{table_name}}", "Account")
console.log('myQuery: ', myQuery);

//4. Convert the given date format to YYYYMMDD format

let modifiedDt = dt.replace(/-/g, "")
console.log('modifiedDt: ', modifiedDt);
 


