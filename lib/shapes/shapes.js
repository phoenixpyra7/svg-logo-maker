// Parent class for all shapes
class Shapes {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
}
// Square shape has it's own class.
class Square extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="70" y="30" width="100" height="100" fill="${this.color}" /> <text x="140" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}
// Circle shape has it's own class.
class Circle extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="160" cy="110" r="60" fill="${this.color}" /> <text x="140" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}
// Triangle shape has it's own class.
class Triangle extends Shapes {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="60,150 50, 170 70, 160" fill="${this.color}"/> <text x="160" y="160" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
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

module.exports = { createShape, Circle, Square, Triangle };
