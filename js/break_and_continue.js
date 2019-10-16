"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

while (true) {
    var userNumber = parseFloat(prompt("Enter an odd number between 1 and 50."));
    if (userNumber % 2 !== 0 && userNumber >= 1 && userNumber <= 50) {
        break;
    }
    if (isNaN(userNumber) === true) {
        alert("Entered value is not a number.");
        continue;
    }
    if (userNumber % 2 === 0) {
        alert("Entered value is not an odd number.");
    }

}

for (var i = 1; i <= 50; i++) {
    if (i === userNumber) {
        console.log("Yikes! Skipping number " + userNumber);
        continue;
    }
    if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}
