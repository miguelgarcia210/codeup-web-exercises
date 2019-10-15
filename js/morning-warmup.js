"use strict";

function sumOfTwo(x, y) {
    return x + y;
}

console.log(sumOfTwo(2, 2));

// area of triangle function when given three side values
function areaOfTriangle(a, b, c) {
    // this variable stores half the perimeter
    var half = (a + b + c) / 2;
    // the area is the square root of this
    return Math.sqrt(half * (half - a) * (half - b) * (half - c));
}

// console log to see the result
console.log(areaOfTriangle(5, 6, 7));

// write a javascript function that returns the string "Hi"
function sayHi() {
    return "Hi";
}

console.log(sayHi());

// Write a javascript function that returns "Hello" and a name (e.g. "Hello, Jim")
function sayHello(name) {
    return "Hello, " + name + ".";
}

console.log(sayHello("Miguel"));


// Write a JavaScript function that returns the first element of an array
function showFirst(i) {
    return i[0];
}

console.log(showFirst([1, 2, 3, 4, 5]));

// Write a JavaScript function that returns the area of an equilateral triangle
function areaOfEquilateralTriangle(sideOfTriangle) {
    return ((Math.sqrt(3) / 4) * (Math.pow(sideOfTriangle, 2)));
}

console.log(areaOfEquilateralTriangle(20.8));

// Concatenate 3 strings together
function putTogether(a, b, c) {
    return a + b + c;
}

console.log(putTogether("Hello ", "there ", "Miguel. "));

// Write a JavaScript function that takes in a string and returns a  string with all the characters upper-cased.
function allUpper(i) {
    return i.toUpperCase();
}

console.log(allUpper("miguel"));

// Write the JavaScript function that calculates the area of a circle when provided the diameter
function areaOfCircle(i) {
    //FORMULA: (1/4)*PI*d^2
    var diameterSquared = Math.pow(i, 2);
    return ((1 / 4) * (Math.PI * diameterSquared));
}

console.log(areaOfCircle(12));

// Write a JavaScript function that returns the perimeter of a quadrilateral
function quadrilateralPerimeter(a, b, c, d) {
    return a + b + c + d;
}

console.log(quadrilateralPerimeter(5, 7, 9, 11));

// Return type of input
function checkType(i) {
    return typeof (i);
}

console.log(checkType(1));

// write a javascript function returns true only when passed a positive, even number
function positiveEven(i) {
    return i % 2 === 0 && i >= 0;
}

console.log(positiveEven(10));

// write a javascript function that prompts a user for a number and returns 'true' if it is greater than 5
function greater5() {
    var userNumber = parseFloat(prompt("Please enter a number"));
    return userNumber > 5;
}

console.log(greater5());

/*

Write a JavaScript function that returns the message, “Hello there, stranger.”
Alert the return from this function. Refactor so that it returns “Hello there, “ concatenated to an argument.
Prompt the user to input a string, call the function,
and alert the return refactor so that the function has ‘stranger’ as a default value for the parameter

 */
function helloThere(string = "stranger") {
    return "Hello there, " + string + ".";
}

var promptedResponse = prompt("Enter your name please.");

alert(helloThere(promptedResponse));

//Write a JavaScript function that accepts an array and returns the length of that array

function arrayLength(x) {
    return x.length
}
var myArray = [0,1,2,3,4];

console.log("The length of the array is " + arrayLength(myArray));

// Write a JavaScript function that takes in an array that has a length of 5. Console log each element of the array.
function showItems(x) {
    var i = 0;
    while (i < x.length) {
        console.log(x[i]);
        i++;
    }
    return i;
}

console.log(showItems([1, 2, 3, 4, 5]));