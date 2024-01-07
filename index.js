const fs = require("fs");
const inquirer = require("inquirer");
const shapes = require('./lib/shapes.js');
const prompt = inquirer.createPromptModule();


prompt ([
    {
        type: "input",
        message: "ENTER QUESTION HERE?",
        name: "name",
    },
    {
        type: "input",
        message: "ENTER QUESTION HERE?",
        name: "name",
    }
])
.then((data) => {
    console.log(data);
});