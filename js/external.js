"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInputFavoriteColor = prompt("What is your favorite color");
alert("Great," + " " + userInputFavoriteColor + " " + "is my favorite color too!");

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

totalPayment();