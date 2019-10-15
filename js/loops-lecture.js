"use strict";
/*
* WHILE LOOPS
*/

// TODO: 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
// while (i < 100) {
//     i = i + 10;
//     console.log(i)
// }

// TODO: 2. Create a while loop that counts backwards from 50 - 1

// var i = 50;
// while (i !== 0) {
//     console.log(i);
//     i -= 1;
// }

// NOTICE: variable is ONLY initialized and not declared. Default value is 'true'
var myQuestion;

// TODO: 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// NOTICE: Default value of myQuestion is 'true' therefore, we must test for 'not true' which will return true and run the body
// while(!myQuestion) {
//     myQuestion = confirm("Would you like to exit");
// }

/*
* DO-WHILE LOOPS
*/


// TODO: 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?
// question 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"

// do{
//     myQuestion = confirm("Would you like to exit");
// }while(!myQuestion);


// TODO: 5. Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"
// do {
//     var color = prompt("Enter a color.");
// }while(color !== "blue");

// TODO: 6. Refactor question 1 using a do-while loop.
// question 1: Create a while loop that counts to 100 in increments of ten:

// var i = 0;
// do {
//     console.log(i += 10);
// } while(i < 100);


/*
* FOR LOOPS
*/

// for (initialize; condition; increment)
// Initialize (of a variable)
// Condition (the condition we check before running the loop)
// Increment ()

// EXAMPLE
// function countFrom(x) {
//     for(var i = x; i <= 100; i++) {
//         console.log(i);
//     }
//     return "Done counting.";
// }

// countFrom(50);

// EXAMPLE
// var randomColors = ["red", "orange", "yellow", "blue", "green"];
// for (var i = 0; i < randomColors.length; i++) {
//     // COMMENT: log even indices only
//     // if (i % 2 === 0) {
//     //     console.log(randomColors[i]);
//     // }
//     // COMMENT: log all indices
//     console.log(randomColors[i]);
// }

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// TODO: 7. Create a for loop that iterates over this array and logs out each element to the console

// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


// TODO: 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

// for (var i = 0; i <= 100; i++) {
//     switch (i <= 100) {
//         case i % 3 === 0 && i % 5 === 0:
//             console.log("FizzBuzz");
//             break;
//         case i % 3 === 0:
//             console.log("Fizz");
//             break;
//         case i % 5 === 0:
//             console.log("Buzz");
//             break;
//         default:
//             console.log(i);
//     }
// }

//version 2 one line
// for(var i=0; i<100;)console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);

// TODO: 9. Refactor question 1 using a for-loop
// question 1. Create a while loop that counts to 100 in increments of ten:
// for (var i = 10; i <= 100; i += 10) {
//     console.log(i);
// }

/*
* BREAK AND CONTINUE
*/

// TODO: 10. Refactor question 1: using a 'break', stop the counting once it hits 70.
// question 1. Create a while loop that counts to 100 in increments of ten:
// var i = 0;
// while (i < 100) {
//     if (i === 70) {
//         break;
//     }
//     i+=10;
//     console.log(i)
// }

// TODO: 11. Refactor question 2: using a 'continue', skip numbers 50-26 and only log 25 - 1.
// question 2: Create a while loop that counts backwards from 50 - 1
// var i = 50;
// while (i !== 1) {
//     i -= 1;
//     if (i > 25) {
//         continue;
//     }
//     console.log(i);
// }