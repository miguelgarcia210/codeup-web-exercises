"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = {};

/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */

var myMac = new Object();
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

myPhone.model = "iPhone X";
myPhone.color = "Space Grey";
myPhone.storage = "256 GB";

console.log(myPhone);

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "MacBook Pro";
myMac.size = "13-inch";
myMac.year = "Mid 2014";

console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Miguel",
    lastName: "Garcia"
};

console.log(myPhone.name.lastName);

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["Photos","Music","Documents"];
console.log(myMac);

function myApps() {
    console.log("These are my apps.");
    myMac.folders.forEach(function (folder) {
        console.log(folder);
    });
    return "Did you find what you were looking for?";
}
console.log(myApps());

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
    username: "miguelgarcia",
    fakePassword: "password",
    email: "miguel@codeup.com"
};

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

console.log(myPhone);
console.log(myMac);

myPhone.call = function () {
    console.log("Dialing...");
};

console.log(myPhone.call());

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.powerOn = function () {
    console.log("Powering on...");
};

console.log(myMac.powerOn());

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function () {
    console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
};

console.log(myPhone.currentUser());

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function () {
    console.log("Current User:\n" + this.login.username + "\n" + this.login.email);
};

console.log(myMac.currentUser());


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        weapon: "Spatula",
        attacks: ["Karate", "Bubble Blowing", "Jelly Fishing"],

        catchPhrase: function () {
            return "I'm ready!";
        }
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        weapon: "Mayonnaise",
        attacks: ["Rock hiding", "Secret Photo", "Wumbo"],
        catchPhrase: function () {
            return "No, this is Patrick.";
        }
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        weapon: "Secret Formula",
        attacks: ["Take money", "Hide money", "Tiny violin"],
        catchPhrase: function () {
            return "MONEYYYYY!";
        }
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        weapon: "Clarinet",
        attacks: ["Bad music", "Nag", "Squilliam!"],
        catchPhrase: function () {
            return "*nasal noise*";
        }
    }
];
chooseYourFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ":" + fighter.catchPhrase());
    console.log(fighter.name.firstName + "'s attacks are: ");
    fighter.attacks.forEach(function (attack) {
        console.log(attack);
    });
    console.log("----------");
});

