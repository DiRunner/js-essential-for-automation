"use strict";

/**
 * Object creation - Different ways
 * 
 * @scenario
 * 1. Using object literals/initializer (Commonly used in Test Automation)
 * 2. Using contstructor fn
 * 3. Object create method
 * From ES5, Object can be created using classess
 */

// 1. using object literals/initializer (commonly used in Test Automation)

let obj = {
    name: "Rob",
    age: 25,
    isMarried: false
}

// Result
// console.log(obj); // overall object
// console.log(obj.name); //single property Rob
// console.log(typeof obj);

// 2. Using constructor fn
function Person(name, age, isMarried){
    this.name = name
    this.age = age
    this.isMarried = isMarried
    return `The name is: ${this.name} and the age is: ${this.age} and marital status: ${this.isMarried}`
}

let obj2 = new Person("Bob", 30, true)

// console.log(obj2);
// console.log(obj2.name);
// console.log(typeof obj2);

// 3. Object create method

let obj3 = Object.create(obj)

console.log(Object.getPrototypeOf(obj3));
console.log(obj3);
console.log(obj3.name);
console.log(obj3.age);
console.log(typeof obj3);