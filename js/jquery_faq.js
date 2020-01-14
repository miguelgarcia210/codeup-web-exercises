"use strict";

var h3 = $("h3");
var ul = $("ul");
var registerTitle = $("#register");

$(document).ready(function () {
    $("dd").addClass("invisible");
});

$("#toggle-invisibility").click(function (event) {
    event.preventDefault();
    $("dd").toggleClass("invisible");
});

$("dt").click(function (event) {
    $(this).toggleClass("highlight");
});

// -------------------------------------------------------
$("#button").click(function (event) {
    $("ul").each(function () {
        $(this).children().last().toggleClass("yellow-back");
    });
    $(this).toggleClass("park-button");
    if ($(this).hasClass("park-button")) {
        $(this).html("Codeup");
    } else {
        $(this).html("Don't Click!")
    }
});

h3.click(function(event) {
   $(this).parent().children("li").toggleClass("bold");
});

$("li").click(function (event) {
    console.log($(this).parent().children());
    // $(this).parent().children("li").first().toggleClass("blue-text");
});

// -------------------------------------------------------
// TODO: Create 3 divs that each look like a picture frame.
//  Each one should have a unique background image and a button underneath that swaps the image from the frame.
//  Use the traversing functions of jQuery to accomplish this.
//  The rules are the following:
//  The left frame swaps to the right and takes the image from the frame in the center.
//  The center frame swaps randomly to either the left or right.
//  The right frame swaps to the left and takes the image from the frame in the center.

var characters = [
    {
        message: "hello"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "there"
        // img: Object.assign(new Image, {src: "/Users/miguelgarcia/IdeaProjects/codeup-web-exercises/img/cutedog.jpg"})
    },
    {
        message: "dev"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "miguel"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "of"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "kingdom"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "codeup"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "ducky"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
    {
        message: "domain"
        // img: Object.assign(new Image, {src: "../../img/codeup-arrow-logo.png"})
    },
];

function createPhotoWall(character) {
    var html = "<div class=\"card\">";
    // html += "<img src=\"" + character.message + "\">";
    html += "<span>" + character.message + "</span>";
    html += "<button name=\"switch-button\">" + "switch" + "</button>";
    html += "</div>";
    html += "\n"; // TO READ CONSOLE EASIER

    return html;
}

function addCharacters(characters) {
    var html = "";
    for (var i = 0; i < characters.length; i++) {
        html += createPhotoWall(characters[i]);
        console.log(html);
    }
    return html;
}
$("#card-button").click(function (event) {
    $(this).toggleClass("show button-center-active button-center-idle");
   if ($(this).hasClass("show")) {
       $("#photo-collage-container").prepend(addCharacters(characters));
       $(this).html("Hide Photo Wall");
   } else {
       $("#photo-collage-container").children("div").html("");
       // $(this).html("Show Photo Wall");

   }
});

// Effects exercise

$("div").first().children("span").first().click(function () {
   $(this).prev().hide();
});

// Make ul's with an h3 right before start out hidden.
h3.next("ul").hide();
// Display/hide ul's when h3 is clicked
ul.prev("h3").click(function () {
    $(this).next().slideToggle();
});

function convertToMiliSeconds(num) {
    return num * 1000;
}

registerTitle.hide();
registerTitle.delay(convertToMiliSeconds(8)).fadeIn(convertToMiliSeconds(5));