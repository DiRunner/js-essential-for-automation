/**
 * Switch case
 * 
 */

let browser = "Chrome"

switch (browser){
    case "Chrome":
        console.log('>> Running chrome browser...');
        break
    case "Firefox":
        console.log('>> Running Firefox browser...');
        break
    case "Edge":
        console.log('>> Running Edge browser...');
        break
    default:
        console.log(`No valid browser: ${browser} is provided`);
}