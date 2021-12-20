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
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to installing your project?',
        default: 'Clone the Repo and run "npm i" in console then run "node index.js"',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What would your project be used for?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add the gitHub user names of any contributer to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain any testing procedures for your project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'If you would like to provide your Email for contact about your project do so here',
    },
    {
        type: 'input',
        name: 'gihub',
        message: 'Input your gitHub username here for people to track the project'
    } 
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
