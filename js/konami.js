"use strict";

var codeStart = false;
var arrowClicked = false;
var eventKeyArr = [];

// SET KEY CODES
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b', 'Enter'];
var num = 0;
var action1 = "Miguel's Arcade";


var checked = function checkEvent() {
    if ($(document).click()) {
        return "clicked";
    } else if ($(document).keydown()) {
        return "keyed"
    }
};

// GOOD WORKS
// $(document).on("keyup", function (event) {
//     var enteredKey = event.key;
//     var konamiKey = konamiCode[num];
//     if (event.key === konamiKey) {
//         num++;
//         console.log(event.key);
//         console.log("matched");
//         if (num === konamiCode.length) {
//             $("#arcade-title").html("Miguel's Arcade");
//         }
//     } else {
//         console.log("not it");
//         num = 0;
//         console.log(num);
//     }
// });

// GOOD WORKS END

// $(document).keyup(function (event) {
//     if (event.key === ' ') {
//         codeStart = true;
//         eventKeyArr.push(event.key);
//         console.log("Listener: You may now enter your code.")
//     }
// });

// $(document).click(function (event) {
//     if (codeStart === true) {
//         var konamiKey = konamiCode[num];
//         if (event.key === konamiKey) {
//             num++;
//             console.log(event.key + " matched");
//             if (num === konamiCode.length) {
//                 $("arcade-title").html(action1)
//             }
//         }
//     }
// });

$(document).on("keyup", function (event) {
    if (event.key === ' ') {
        codeStart = true;
        eventKeyArr.push(event.key);
        console.log("Listener: You may now enter your code.")
    }
    if (codeStart === true && eventKeyArr[0] === " ") {
        // var enteredKey = event.key;
        var konamiKey = konamiCode[num];
        if (event.key === konamiKey) {
            num++;
            console.log(event.key + " matched");
            if (num === konamiCode.length) {
                $("#arcade-title").html(action1);
                // RESET FUNCTIONALITY
                codeStart = false;

            }
        } else {
            num = 0;
            console.log(event.key + " not it " + num);
        }
    }
});