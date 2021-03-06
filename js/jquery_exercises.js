"use strict";
//
// $(document).ready(function () {
//     alert('The DOM has finished loading!');
// });
//
// // TODO: Id Selectors
//
// //  1.Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
// //  2. Add several attributes to your elements; you will need both id and class attributes.
//
// //  3. Use jQuery to select an element by the id. Alert the contents of the element.
// var myDivContents = $("#myDiv").html();
// alert(myDivContents);
//
// //  4. Update the jQuery code to select and alert a different id.
// var myListContainer = $("#list-container").html();
// alert(myListContainer);
//
// //  5. Use the same id on 2 elements. How does this change the jQuery selection?
// // SELECTS THE FIRST ID ONLY
// // var duplicateListItemID = $("#list-item-6").html();
// // alert(duplicateListItemID);-
//
// //  6. Remove the duplicate id. Each id should be unique on that page.
//
// // TODO: Class Selectors
// //  1. Remove your custom jQuery code from previous exercises.
// //  2. Update your code so that at least 3 different elements have the same class named codeup.
// //  3. Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
// $(".codeup").css("border", "1px solid red");
// //  4. Remove the class from one of the elements. Refresh and test that the border has been removed.
// //  5. Give another element an id of codeup. Does this element get a border now?
//
// // TODO: Element Selectors
// //  1. Remove your custom jQuery code from previous exercises.
// //  1. Using jQuery, set the font-size of all li elements to 20px.
// $("li").css("font-size", "20px");
// //  1. Craft selectors that highlight all the h1, p, and li elements.
// $("h1").css("background-color", "yellow");
// $("p").css("background-color", "yellow");
// $("li").css("background-color", "yellow");
// //  1. Create a jQuery statement to alert the contents of your h1 element(s).
// var headerContents = $("h1").html();
// alert(headerContents);
//
// // TODO: Multiple Selectors
// //  1. Combine your selectors that highlight all the h1, p, and li elements.
//
// $("#list-item-5").html("<p style='font-size: 24px'>WAIT FOR IT...</p>");
//
// function convertSeconds(x) {
//     return x * 1000;
// }
//
// function myFunction() {
//     setTimeout(function () {
//         $("h1, p, li").css("background-color", "red");
//         console.log("hello");
//     }, convertSeconds(10));
// }
//
// myFunction();

// Add jQuery code that will change the background color of an h1 element when clicked.
$("h1").click(function() {
    $(this).css("background-color", "green");
});
// Make all paragraphs have a font size of 18px when they are double clicked.
$("p").dblclick(function (e) {
    $(this).css("font-size", "18px");
});
// Set all li text color to red when the mouse is hovering; reset to black when it is not.
$("li").hover(
    function() {
        $(this).css("color", "red");
    },
    function() {
        $(this).css("color", "black");
    }
);