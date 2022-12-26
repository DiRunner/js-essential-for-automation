/**
 * for...in and for...of
 * @purpose
 * for...in -> Object
 * for...of -> Array
 */

let obj = {
    a : 10,
    b : 20,
    c : 30    
}

let window = ["Google", "Amazon", "Youtube"]

for (let key in obj) {
    console.log(obj[key]);
}

for (const i of window) {
    console.log(i);
}