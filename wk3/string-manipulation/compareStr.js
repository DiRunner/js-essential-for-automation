"use strict";

/**
 * Compare String
 * 1. Full Match
 * 2. Partial Match:
 *  - includes()
 *  - startsWith()
 *  - endsWit()
 * 
 * @questions:
 * 1. Is this a case sensitive comparisson?
 * 2. Does the string needs to be trimmed?
 * 
 */

let filename = "  Invoice_123.pdf"

// Full match

if(filename.toUpperCase().trim() === "INVOICE_123.PDF"){
    console.log('>>> The file name matches...');
}

// Partial Match

if(filename.startsWith(" ")){
    console.log(">>> the filename starts with a blank space");
}
