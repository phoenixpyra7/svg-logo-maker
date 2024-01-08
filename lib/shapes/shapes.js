// Parent class for all shapes
class Shapes {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
}
// Circle shape has it's own class.
class Circle extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.color}" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

// Square shape has it's own class.
class Square extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="90" y="40" width="120" height="120" fill="${this.color}" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}
// Triangle shape has it's own class.
class Triangle extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,18 244, 182 56, 182" fill="${this.color}"/> <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

// Attempt using an if statement instead an if/else function.
const createShape = (shape = "square", text, shapeColor, textColor) => {
  let logo;

  if (shape === "square") {
    logo = new Square(text, shapeColor, textColor);
  }

  if (shape === "circle") {
    logo = new Circle(text, shapeColor, textColor);
  }

  if (shape === "triangle") {
    logo = new Triangle(text, shapeColor, textColor);
  }

  return logo;
};

module.exports = createShape;
