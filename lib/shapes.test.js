
// Created tests for each shape
const createShape = require("./shapes");

it("should accept a fill color param", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="70" y="30" width="100" height="100" fill="red" /> <text x="120" y="95" font-size="40" text-anchor="middle" fill="white">IDK</text> </svg>`;
  const actualSvg = createShape("square", "IDK", "red", "white");
  // const actualSvg = square.render();
  expect(actualSvg).toEqual(expectedSvg);
});

it("should accept a fill color param", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="160" cy="110" r="60" fill="purple" /> <text x="160" y="120" font-size="40" text-anchor="middle" fill="gray">SMH</text> </svg>`;
  const actualSvg = createShape("circle", "SMH", "purple", "gray");
  // const actualSvg = circle.render();
  expect(actualSvg).toEqual(expectedSvg);
});

it("should accept a fill color param", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,50 50, 150 250, 150" fill="yellow"/> <text x="150" y="130" font-size="40" text-anchor="middle" fill="black">GTL</text> </svg>`;
  const actualSvg = createShape("triangle", "GTL", "yellow", "black");
  // const actualSvg = triangle.render();
  expect(actualSvg).toEqual(expectedSvg);
});
