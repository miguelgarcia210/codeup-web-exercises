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

var myArray = [0, 1, 2, 3, 4];

console.log("The length of the array is " + arrayLength(myArray));

//Write a JavaScript function that returns the quotient of two numbers, but only when passed two numbers. It should return false in all other cases

function quotient(a, b) {
    if (typeof parseFloat(a) === "number" && typeof parseFloat(b) === "number") {
        return Math.floor(parseFloat(a) / parseFloat(b));
    } else {
        return false;
    }
}

console.log(quotient("5", "2"));
console.log(quotient(5, 2));
console.log(quotient(5, "hello"));

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

// Write a JavaScript function that takes in an input and returns true if the input is a string, at least 8 characters in length. It should return false for all other input.

function desiredString(x) {
    if (typeof x === "string") {
        return x.length >= 8;
    }
    return false;
}

console.log(desiredString("yourself"));
console.log(desiredString("hello"));

// Write a JavaScript function that takes in a floating point number, and returns a number rounded down. It should return false for all inputs that aren't numbers.

function roundDecimal(x) {
    if (typeof x === "number" && !isNaN(x)) {
        return Math.floor(x);
    } else {
        return false;
    }
}

console.log(roundDecimal(3.14));
console.log(roundDecimal(99.99));
console.log(roundDecimal("hello"));
console.log(roundDecimal([1, 2, 3, 4, 5]));
console.log(roundDecimal(["1", "2", "3", "4", "5"]));
console.log(roundDecimal(["hola", "bonjour", "hi", "hello"]));

// Write a JavaScript function that counts from 1 up to the number that the user passes in. For example, if the argument passed in is 10, the function should log numbers 1 through 10.

function counting(x) {
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
}

counting(15);

// Write a JavaScript function that createPersonObject that takes in a name (that is a string) and an age (that is a number) and returns a person object containing the name and age.
// e.g. createPersonObject ("Hannah", 47)
// {
//     name: "Hannah",
//     age: 47
// }

function createPersonObject(name, age) {
    var person = {
        name: name,
        age
    }
    return person;
}

// Write FizzBuzz in JavaScript

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Write a JavaScript function that will return the number 5, but only when passed the string 'five'

function showFive(x) {
    if (x === "five") {
        return 5;
    } else {
        return false;
    }
}

console.log(showFive("five"));

// Write a JavaScript function that will return the shopping cart object with the most oranges.

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    }, {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    }, {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

function theMostOranges() {
    var most = shoppingCarts[0].oranges;
    shoppingCarts.forEach(function (cart) {
        if (cart.oranges > most) {
            most = cart;
        }
    });
    return most;
}

console.log(theMostOranges(shoppingCarts));

// Write a JavaScript function that accepts an array of student objects and returns an array of student objects that are not registered for class

var students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
];

function notRegistered(stuArr) {
    var nonRegisteredArr = [];
    stuArr.forEach(function (student) {
        if (student.isRegistered === false) {
            nonRegisteredArr.push(student);
        }
    });
    return nonRegisteredArr;
}

console.log(notRegistered(students));

// Write a JavaScript function that will return an array of hamster objects sorted by height in ascending order.
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function sortHeight(x) {
    return x.sort(function (a, b) {
        return a.heightInMM - b.heightInMM;
    });
}

console.log(sortHeight(hamsters));