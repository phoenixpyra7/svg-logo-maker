const fs = require("fs");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();


prompt ([
    {

        type: "input",
        name: "name",
        message: "ENTER QUESTION HERE?",

    }
])