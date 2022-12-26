/**
 * Use Case 3: Use of break statements
 * @secenario:
 * Switch to a specific window
 */

let windows = ["Google", "Amazon", "Youtube"]

for(let i=0; i < windows.length; i++){
    let window = windows[i]
    if(window === "Amazon"){
        //write code to switch window
        break
    }
    console.log(window);
}

windows.forEach(window => console.log(window))