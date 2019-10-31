"use strict";

$(document).ready(function () {
    $("dd").addClass("invisible");
});

$("#toggle-invisibility").click(function(event) {
    event.preventDefault();
    $("dd").toggleClass("invisible");
});

$("dt").click(function (event) {
   $(this).toggleClass("highlight");
});