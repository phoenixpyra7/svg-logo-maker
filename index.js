const fs = require("fs");
const inquirer = require("inquirer");
const createShape = require("./lib/shapes");
const prompt = inquirer.createPromptModule();

// Basic rendering questions
prompt([
  {
    type: "input",
    message: "Please select 1-3 letters for your text?",
    name: "text",
    validate: (input) => {
      if (input.length < 1) {
        return "Please enter at least 1 character.";
      }
      if (input.length > 3) {
        return "Please enter no more than 3 characters.";
      }
      return true;
    }
  },
  {
    type: "input",
    message:
      "What color would you like your text to be (keyword or hexadecimal)?",
    name: "textColor",
  },
  {
    type: "rawlist",
    message: "Please select your desired shape:",
    choices: ["square", "triangle", "circle"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "What color would you like the shape to be (keyword or hexadecimal)?",
    name: "shapeColor",
  },
]).then(async (answers) => {
    
  // To process the users input
  console.log(answers);

// Generate the SVG
  const svgContent = createShape(answers.shape, answers.text, answers.shapeColor, answers.textColor);
  console.log(svgContent);
  fs.writeFileSync(`${process.cwd()}/logos/${answers.text}.svg`, svgContent);
  console.log("Generated logo.svg");
});
