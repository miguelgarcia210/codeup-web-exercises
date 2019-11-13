"use strict";

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = number => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, number)
});

// wait(1000).then(() => console.log(`You'll see this after 1 second.`));
// wait(3000).then(() => console.log(`You'll see this after 3 second.`));

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

const githubUser = username => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${githubToken}`}})
        .then(response => response.json())
        .then(response => userCommits(response))
};

const userCommits = userData => {
    userData.find((element) => {
        if (element.type === "PushEvent") {
            console.log(element.created_at);
            return element.created_at;
        } else {
            console.log("No Commits");
        }
    })
};

githubUser("miguelgarcia210");
