"use strict"

/**
 * Function that check who is using what operating system
 * 
 * 1. Check if the user always provides two values (e,g personName as 'Rob' and os as 'Windows'. if not, throw error saying 
 *  "One or more values are missing..."
 * 
 * 2. if user provides any other data type than string, then throw error message saying "Only string values are accepted, but 
 *  received values are <val1> and <val2>". 
 * 
 * 3. Write a console message saying "Hello <name>, you have provided <os> as your operating system..."
 * 
 * 4. If user provides any of the below values as os, then consider the os as "macOS" and return the message as "<Person 
 *  name> is using macOS..."
 *  a. Apple, apple, <space> Apple
 * 
 * 5. If user provides any of the below values as os, then consider the os as "Windows" and return the message as "<Person 
 *  name> is using Windows..."
 *  a. Windows, Windows, windows<space>
 * 
 * 6. if user provides any other values as os, then return the message as ""<Person name> is using other OS...""
 * 
 */

function checkOS(personName, os){
    if( personName === undefined || os === undefined ){
        throw Error('One or more values are missing');
    }

    if( typeof personName !== 'string' || typeof os !== 'string' ){
        throw Error(`Only string values are accepted, but received values are ${personName} and ${os}`)
    }

    let operatingSystem = os;

    if(os === 'Apple' || os === 'apple' || os === ' Apple' ){
        operatingSystem = 'macOS'
    }
    else if(os === 'Windows' || os === 'windows' || os === 'windows ' ){
        operatingSystem = 'Windows'
    }
    else{
        return `${personName} is using other OS...`
    }    
    return `Hello ${personName}, you have provided ${operatingSystem} as your operating system...`;
}

console.log(checkOS('Rob', 123));