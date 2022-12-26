"use strict"

/**
 * Named function
 * @definition
 * Function that has a name/identifier
 * 
 * @scenario
 * 1. function that returns a value
 * 2. function that does an action
 * 3. Calling function
 * 4. Any type of data ca be provided and no type checking is done
 * 5. More or less args ca be provided and no check is performed on  number of parameter(s) vs -
 *    number of args received
 * 6. Function name and typeof operator
 * 
 */

 // 1. function that returns a value

 function addTwoNum (num1, num2){
    return num1 + num2
 }

 //2. function that does an action

 function click(element) {
    console.log(`Clicking the given element: ${element}`);    
 }

 //3. Calling function

 console.log(addTwoNum(2, 3));
 click("this shit");

 // 4. Any type of data ca be provided and no type checking is done

let total = addTwoNum('2', 'two')
console.log(total); 

 //5. More or less args ca be provided and no check is performed on  number of parameter(s) vs -
 //    number of args received

let total2 = addTwoNum()
console.log(total2);

// 6. Function name and typeof operator

let total3 = addTwoNum(5, 5)
 console.log(addTwoNum);
 console.log(typeof addTwoNum);
 console.log(typeof addTwoNum(2, 2));
 console.log(typeof click('this'));

