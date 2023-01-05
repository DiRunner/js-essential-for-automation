"use strict";

const Page = require("./page")

/**
 * A login page
 * 
 * @lessons
 * 1. How to inherit properties from base class?
 * 2. How to call base class property or method?
 * 3. How to create an object? 
 * 
 * @terminology
 * super class -> sub-class
 * base class -> derived class
 * parent class -> child class
 */

class LoginPage extends Page {

    constructor(){
        super()
    }

    // click a Login btn
    clickLoginBtn(){
        this.click("loginBtn")
    }

}

// Object creation
let loginPg = new LoginPage()
console.log(typeof loginPg); //object

// Calling a parents' method
loginPg.navigateTo('google.com')

// Calli the own method
loginPg.clickLoginBtn()