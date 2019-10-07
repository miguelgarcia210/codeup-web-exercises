"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavoriteColor = prompt("What is your favorite color");
alert("Great," + " " + userFavoriteColor + " " + "is my favorite color too!");


// You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
function totalPayment() {
    // Number of days associated to each movie
    var movie1 = parseInt(prompt("How many days did you rent out The Little Mermaid?"));
    var movie2 = parseInt(prompt("How many days did you rent out Brother Bear?"));
    var movie3 = parseInt(prompt("How many days did you rent out Hercules?"));
    var totalDays = movie1 + movie2 + movie3;

    var costPerDay = 3;
    var totalDue = totalDays * costPerDay;

    alert("Your total amount due for all rented movies is" + " " + totalDue);
}

// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
function contractorPayStub() {
    //Pay Rates for select companies (integers represent $)
    var googlePayRate = parseInt(prompt("Enter the pay rate for Google."));
    var amazonPayRate = parseInt(prompt("Enter the pay rate for Amazon."));
    var facebookPayRate = parseInt(prompt("Enter the pay rate for Facebook."));

    //Amount of hours worked for each company
    var googleHours = parseInt(prompt("Enter amount of hours worked for Google."));
    var amazonHours = parseInt(prompt("Enter amount of hours worked for Amazon."));
    var facebookHours = parseInt(prompt("Enter amount of hours worked for Facebook."));

    //Pay stub totals from each company
    var googlePayStub = googlePayRate * googleHours;
    var amazonPayStub = amazonPayRate * amazonHours;
    var facebookPayStub = facebookPayRate * facebookHours;

    //Cumulative total payout from all companies
    var totalPayStub = googlePayStub + amazonPayStub + facebookPayStub;

    alert("The total amount received before tax deductions is" + " " + "$" + totalPayStub + ".")
}

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
function canEnroll() {
    var courseSchedule = 9;

    var maxStudents = parseInt(prompt("Please enter the maximum number of students for this course"));
    var enrolledStudents = parseInt(prompt("Please enter the total number of currently enrolled students."));

    if (maxStudents === enrolledStudents) {
        alert("Thank you for your interest in this course. Unfortunately, this course is at its maximum capacity");
    } else {
        var studentSchedule = parseInt(prompt("Please enter the starting hour of your schedule."));
        if (courseSchedule === studentSchedule) {
            alert("Thank you for your interest in this course. Unfortunately, this course conflicts with your current schedule.");
        } else {
            alert("You are able to enroll in this course.");
        }
    }
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

function offerDisplay() {
    var offerValid = confirm("Is the offer still valid?");
    if (offerValid === false) {
        alert("Offer has already expired.");
        return;
    }

    var premiumMember = confirm("Are you a Premium Account Member?");
    if (premiumMember === true) {
        alert("Offer Displayed");
        return;
    }

    var numberOfItems = parseInt(prompt("How many items are you purchasing?"));
    if (numberOfItems > 2) {
        alert("Offer Displayed")
    } else {
        alert("Minimum amount of items for this offer is 3.")
    }
}


totalPayment();
contractorPayStub();
canEnroll();
offerDisplay();

