(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var myString = planetsArray.join("<br>");
    console.log(myString);

//    === BONUS ===
//    === SOLUTION FIRST ===
// var myList = planetsString.split("|");
// var myOtherList = "";
//
// myList.forEach(function (planet) {
//     myOtherList += "<li>" + planet + "</li>";
// });
// myOtherList = myOtherList.split();
// myOtherList.unshift("<ul>");
// myOtherList.push("</ul>");
// myOtherList = myOtherList.join("");
//     console.log(myOtherList);


    // === ORIGINAL FUNCTION ===
//     function makeUnorderedList(x) {
//         var arrayList = x.split("|");
//         var unorderedList = "";
//
//         arrayList.forEach(function (planet) {
//             unorderedList += "<li>" + planet + "</li>";
//         });
//
// //    Turn string into an array using the split method
//         unorderedList = unorderedList.split();
// //    Add the starting <ul> tag to the beginning of the array
//         unorderedList.unshift("<ul>");
// //    Add the closing </ul> tag to the end of the array
//         unorderedList.push("</ul>");
// //    Turn array into a string using the join method with a delimiter of ""(empty string)
//         unorderedList = unorderedList.join("");
//
//         return unorderedList;
//     }

    // === UI FUNCTION ===
    // I chose to continue off the function above rather than using the function above within this function below to keep them separate and recognize my steps to this final function.
    function makeUnorderedList() {
        while (true) {
            // Prompt the user to enter a list as instructed to.
            var userList = prompt("Enter a list of items separated by '|' or ','\nAll other symbols will be considered part of your item.\ne.g.\npizza|pasta|wings|fries\npizza,pasta,wings,fries");
            // Set variables to hold an array converted from a string, and the final string with the unordered list tags
            var arrayList;
            var unorderedList;
            // Break out of loop if user pressed cancel
            if (userList === null) {
                return "user canceled prompt";
            }
            // Check input. If empty string (""), do not proceed else add an empty string to unorderedList to proceed
            if (userList === "") {
                continue;
            } else {
                unorderedList = "";
            }
            // Check if user entered list correctly as instructed
            if (userList.match(/\|/gi) && userList.match(/,/gi)) {
                alert("You like to destroy art don't you .-.\n No worries I'm an artist. Your unordered list is being prepared");
                arrayList = (userList.replace("|", ",")).split(",");
                break;
            } else if (userList.match(/\|/gi)) {
                alert("Your unordered list is being prepared...");
                arrayList = userList.split("|");
                break;
            } else if (userList.match(/,|/gi)) {
                alert("Your unordered list is being prepared...");
                arrayList = userList.split(",");
                break;
            } else {
                alert("Please use '|' or ',' exclusively to separate items in your list.");
            }
        }
        // for each element in the array, add opening/closing list tags to the element and concatenate the return value to the unorderedList variable
        arrayList.forEach(function (planet) {
            unorderedList += "<li>" + planet + "</li>";
        });
        // Turn string into an array using the split method
        unorderedList = unorderedList.split();
        // Add the starting <ul> tag to the beginning of the array
        unorderedList.unshift("<ul>");
        // Add the closing </ul> tag to the end of the array
        unorderedList.push("</ul>");
        // Turn array into a string using the join method with a delimiter of ""(empty string)
        unorderedList = unorderedList.join("");

        return unorderedList;
    }
    console.log(makeUnorderedList());

})();
