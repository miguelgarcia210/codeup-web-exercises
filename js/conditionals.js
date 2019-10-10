"use strict";

(function () {
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function isOdd(x) {
    return x % 2 !== 0;
}

function add100(x) {
    return x + 100;
}

function isNegative(x) {
    return x < 0;
}


function userNumber() {
    var confirmed = confirm("Would you like to enter a number?");

    if (confirmed) {
        var enteredNumber = prompt("Please enter a number below.\nFormat: Integer/Decimal\ne.g. 2, 3.14 ...");

        if (enteredNumber !== null) {
            enteredNumber = parseFloat(enteredNumber);
        } else {
            alert("Sorry to see you go. Refresh the page to visit this prompt again.");
            return 0;
        }

        if (isNaN(enteredNumber) === true) {
            alert("The value you entered is not a number.\nRefresh the page to visit this prompt again.\nValid numbers: e.g. 2, 25, 100 ...");
            return 0;
        } else {
            if (isOdd(enteredNumber) === true) {
                alert("The number you entered is odd.");
            } else {
                alert("The number you entered is even.");
            }

            alert("The addition of 100 to your number is " + add100(enteredNumber));

            if (isNegative(enteredNumber) === true) {
                alert("The number you entered is also a negative number.");
            } else {
                alert("The number you entered is also a positive number.");
            }

            // BELOW IS THE CODE BEFORE REFACTORED W/FUNCTIONS

            // if (enteredNumber % 2 !== 0) {
            //     alert("The number you entered is odd.");
            // } else {
            //     alert("The number you entered is even.");
            // }
            // alert("The addition of 100 to your number is " + (enteredNumber + 100));
            // if (enteredNumber < 0) {
            //     alert("The number you entered is also a negative number.");
            // } else {
            //     alert("The number you entered is also a positive number.");
            // }
        }
    }
}

userNumber();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// === MY CODE ===

function analyzeColor(color) {
    if (color === "red") {
        return "Red cups are used to signal instructors for assistance.";
    } else if (color === "orange") {
        return "\"Orange\" you glad you came to work today?";
    } else if (color === "yellow") {
        return "\"Yellow\" anybody there?";
    } else if (color === "green") {
        return "Green is such a nice color. By the way EAT YOUR GREENS!";
    } else if (color === "blue") {
        return "What would a blue cup stand for on our desks?";
    } else if (color === "indigo") {
        return "The more you know presents:\nIndigo: the second to last color on a rainbow";
    } else if ("violet") {
        return "I wonder what the \"Juicing Room\" looks like. Probably should ask Violet.";
    } else {
        return "My apologies. I only know about the 7 colors of the rainbow.";
    }
}

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
console.log(analyzeColor("cyan"));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    switch (color) {
        case "red":
            return "Red cups are used to signal instructors for assistance.";
        case "orange":
            return "\"Orange\" you glad you came to work today?";
        case "yellow":
            return "\"Yellow\" anybody there?";
        case "green":
            return "Green is such a nice color. By the way EAT YOUR GREENS!";
        case "blue":
            return "What would a blue cup stand for on our desks?";
        case "indigo":
            return "The more you know presents:\nIndigo: the second to last color on a rainbow";
        case "violet":
            return "I wonder what the \"Juicing Room\" looks like. Probably should ask Violet.";
        default:
            return "My apologies. I only know about the 7 colors of the rainbow.";
    }
}

alert(analyzeColorSwitch(randomColor));
alert(analyzeColorSwitch("cyan"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Choose a color:\nred, orange, yellow, green, blue, indigo, violet");

alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Wal-mart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    function displayTotal(finalTotal){
        return "Your total is $" + finalTotal;
    }

    function discountedTotal(percentDiscount) {
        return "You got a " + (percentDiscount * 100) + "% discount! " + displayTotal(total -= total * percentDiscount);
    }

    switch (luckyNumber) {
        case 0:
            return "No discount applied. " + displayTotal(total);
        case 1:
            return discountedTotal(.1);
        case 2:
            return discountedTotal(.25);
        case 3:
            return discountedTotal(.35);
        case 4:
            return discountedTotal(.50);
        case 5:
            return discountedTotal(1);
        default:
            return "Sorry that number is not applicable. " + displayTotal(total);
    }
}

alert(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

}());