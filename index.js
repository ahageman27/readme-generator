// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please input the title of your project.",
        name: "title",
    },
    {
        type: "input",
        message: "Please input a description for your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please input installation instructions for your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please input usage information for your project.",
        name: "usage",
    },
    {
        type: "list",
        message: "Please chose a license for your project.",
        choices: ["Apache License v2.0", "BSD 3-Clause License", "BSD 2-Clause License", "GNU GPL", "GNU LGPL", "MIT License", "Mozilla Public License v2.0", "Common Develpment and Distribution License", "Eclipse Public License v2.0"],
        name: "license",
    },
    {
        type: "input",
        message: "Please input contribution guidelines for your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please input test instructions for your project.",
        name: "test",
    },
    {
        type: "input",
        message: "Please input your GitHub username.",
        name: "username",
    },
    {
        type: "input",
        message: "Please input your email.",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            console.log(response))
}

// Function call to initialize app
init();
