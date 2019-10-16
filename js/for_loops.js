"use strict";

// function showMultiplicationTable(x) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(x + " x " + i + " = " + (x * i));
//     }
// }

// showMultiplicationTable(7);

// for (var i = 1; i <= 10; i++) {
//     var randomNumber = Math.floor(Math.random() * 180) + 20;
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even.");
//     } else {
//         console.log(randomNumber + " is odd.");
//     }
// }

for (var i = 1; i <= 10; i++) {
    var counter = 0;
    while (counter !== i) {
        console.log(i);
        counter += 1;
    }
}