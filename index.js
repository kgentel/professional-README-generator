// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdownFile = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your README title? (Required)",
  },
  {
    type: "input",
    name: "why",
    message: "Why did you build this project?",
    default: true,
  },
  {
    type: "input",
    name: "solve",
    message: "What problem does it solve?",
    default: true,
  },
  {
    type: "input",
    name: "learn",
    message: "What did you learn?",
    default: true,
  },
  {
    type: "input",
    name: "standOut",
    message: "What makes your project stand out?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    default: true,
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    default: true,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log('File written')
  );
}

// // TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) =>{
    writeToFile('READMEproject.md', markdownFile.generateMarkdown(answers));
  })
}

// // Function call to initialize app
init();
