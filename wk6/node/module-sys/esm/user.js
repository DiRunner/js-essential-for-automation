"use strict";

/**
 * Importing
 * 1. Own code
 * 2. npm package
 * 
 * @Recomendation
 * please go with CommonJS
 * (this will work in both .js and .ts world as it is backward compatible)
 */

import data2 from "./helper.js"

//const data = require("./helper")    // default
//const { obj } = require("./helper") // named

// check
console.log(typeof data2);
console.log(data2);
console.log(data2.greet());