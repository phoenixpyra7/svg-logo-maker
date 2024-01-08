const fs = require("fs");
const inquirer = require("inquirer");
const {createShape} = require('./lib/shapes/shapes');
const prompt = inquirer.createPromptModule();

// Basic rendering questions
prompt ([
    {
        type: "input",
        message: "Please select 1-3 letters for your text?",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like your text to be?",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please select your desired shape:",
        options: ["square", "triangle", "circle"],
        name: "shape",
    },
    {
        type: "input",
        message: "What color would you like the shape to be?",
        name: "shapeColor",
    }
]).then((answers) => {
    // To process the users input
    console.log(answers);
  
    // Generate the SVG 
    const svgContent = createShape(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  });