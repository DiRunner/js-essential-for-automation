/**
 * Standard for loop
 * Remember these points(!):
 * 1. Define the starting point
 * 2. Define end/exit condition
 * 3. Decide increment/decrement
 */
for(let i = 0; i <= 10; i++){
    //console.log(i);
}

// Advanced use case with an Array 

let arr = ["Appe", 10, "Orange", 20, "Grapes", 30]
let sum = 0
for(let i = 0; i < arr.length; i++){
    let arrEle = arr[i]
    if (typeof arrEle !== "number") continue
    sum += arrEle
}
console.log(`The value of sum is: ${sum}`);
