"use strict";

(function(){

// multiplication + division function using function declaration/expression
    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(1, 5));

    function divide(a, b) {
        return a / b;
    }

    console.log(divide(10, 5));

//Functions as above as function expressions
    var multiplyExp = function(a, b) {
        return a * b;
    };

    console.log(multiplyExp(1,5));

    var divideExp = function(a, b) {
        return a / b;
    };

    console.log(divideExp(10,5));
})();
