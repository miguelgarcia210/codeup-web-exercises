"use strict";

/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

//TODO: TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

let newArray = numbers.map(num => num + 1);
console.log(newArray);

//TODO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

let newNewArray = newArray.map(num => num * 3);
console.log(newNewArray);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

// TODO: TOGETHER: Let's filter through our binary and return all the true
//  values. We'll store the new array in a variable named 'ones'

let ones = binary.filter(num => num == true);
console.log(ones);

// TODO: filter through binary again and this time, return all the false values.
let zeros = binary.filter(num => num == false);
console.log(zeros);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.
let fruitTypes = fruitsAndVeggies.filter(produce => produce.type === "fruit");
console.log(fruitTypes);

// TODO: filter through the array of objects and return all vegetable type objects.
let vegetableTypes = fruitsAndVeggies.filter(produce => produce.type === "vegetable");
console.log(vegetableTypes);

/*********************************************
 *              .reduce
 ******************************************** */

const numbersLec = [1, 2, 3, 4, 5];

const sumLec = numbersLec.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

// accumulation = 0
// add 1
// accumulation = 1
// add 2
// accumulation = 3
// add 3
// accumulation = 6
// add 4
// accumulation = 10
// add 5
// accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.
let sum = numbers.reduce((total, number) => {
    return total + number
}, 0);

console.log(sum);

// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
let subtracted = numbers.reduce((total, number) => {
   return total - number;
}, 100);

console.log(subtracted);

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    }, {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    }, {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
const apples = shoppingCarts.reduce((total, cart) => {
   return total +  cart.apples
}, 0);
console.log(apples);

// TODO TOGETHER: let's use .reduce to return an object that has properties
//  representing total values for each fruit.
const fruitTotals = shoppingCarts.reduce((total, cart) => {

}, {});

const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];

// TODO: Count the number of times a color appears in this Array.
//  Hint: your initial value should be an empty object.
const colorCount = colors.reduce((colorCount, color) => {
    if (typeof colorCount[color] === "undefined") {
        colorCount[color] = 1;
    } else {
        colorCount[color] += 1;
    }

    return colorCount;
}, {});
console.log(colorCount);

const lyrics = ['we', 'all', 'live', 'in', 'a', 'yellow', 'submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce((currentString, word) => {
    return `${currentString} ${word}`
}, "");
console.log(oneLine);

// TODO: Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// var uniqueItems = [...new Set(items)]
const uniqueFurColors = hamsters.filter((uniqueColors, hamster) => {

}, []);

console.log(uniqueFurColors);

