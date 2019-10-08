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

//    === Self Understanding ===
    function makeAdder(x) {
        return function(y) {
            return x + y;
        };
    }

    // 'var add(#)' are closures that share the same body as makeAdder()
    // lexical environment for each are set differently. Respectively: 5,10,50
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    var add50 = makeAdder(50);

    console.log(add5(2));  // 7
    console.log(add10(2)); // 12
    console.log(add50(50)); // 100
})();
