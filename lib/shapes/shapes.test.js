const { createShape, Circle, Square, Triangle } = require("./shapes");

// Created tests for each shape 
const createShape = require("./shapes");

it("should accept a fill color param", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="70" y="30" width="100" height="100" fill="yellow" /> <text x="140" y="115" font-size="50" text-anchor="middle" fill="green">DMN</text> </svg>`;
    const square = createShape("square", "IDK", "red", "white");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
it("should accept a fill color param", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="160" cy="110" r="60" fill="red" /> <text x="140" y="115" font-size="50" text-anchor="middle" fill="blue">LJK</text> </svg>`;
  const circle = createShape("circle", "SMH", "purple", "gray");
  const actualSvg = circle.render();
  expect(actualSvg).toEqual(expectedSvg);
});

it("should accept a fill color param", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="60,150 50, 170 70, 160" fill="blue"/> <text x="160" y="160" font-size="50" text-anchor="middle" fill="purple">KMN</text> </svg>`;
  const triangle = createShape("triangle", "GTL", "yellow", "black");
  const actualSvg = triangle.render();
  expect(actualSvg).toEqual(expectedSvg);
});
