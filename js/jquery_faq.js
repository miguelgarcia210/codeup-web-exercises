"use strict";

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