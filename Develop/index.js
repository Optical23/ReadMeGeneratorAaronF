// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// const utils = require('utils');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    { 
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), err => {
        (err) ? console.log(err) : console.log('File written: Success');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { 
            writeToFile('README.md', answers);
        })
        .catch((error) => {
            (error) ? console.log(error) : console.log('No errors, Writing file...');
        });
}

// Function call to initialize app
init();
