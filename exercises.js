// Matthew Tomas
// Lambda School Pre-course Homework Assignment #1

// modified exercises.js to pass 25/25 tests follows Feynman writing prompts

// Feynman Writing Prompts
// > Variables - Variables are like boxes where you put an object so that you can 
//             carry it around and use it in different things. You can add more 
//             of the object to the box, or take some out, or change it for a 
//             different object, but you can't have two different objects in the 
//             same box at the same time.
// > Strings - Strings are letters and numbers and other characters. You can 
//             picture them as beads on a string, each with one character. They 
//             are in a specific order and you can refer to each individual bead 
//             with a number. You can tie the string to another, keeping the beads 
//             in order, or you can even cut a string and tie another one in between.
// > Functions (arguments, return) - A function is a recipe. "Arguments" are the 
//             ingredients you put into the recipe, each at a specific time. Certain 
//             things are done to the ingredients, like cutting or mixing or cooking, 
//             and when it is all done you get the final product, which is the 
//             "return".
// > if statements - An "if" statement looks at an idea and figures out if it is 
//             true. If it is true it performs some kind of action. If it is not 
//             true the it skips that action and looks at the next instruction.
// > Boolean values (true, false) - Boolean values are like a light switch, either 
//             on or off. There are only two possibilities, and they are the opposite 
//             of each other. This can be true or false, or yes or no, or, when 
//             represented with numbers, 0 or 1.

// exercises.js
// Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  // code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  // return num after subtracting five
  // code here
  var result = num - 5;
  return result;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  // add x and y together and return the value
  // code here
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  var difference = x - y;
  return difference;
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
  var quotient = x / y;
  return quotient;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  // code here
  if (num % 2 === 1) {
    return true;
  }
  return false;
}

function square(num) {
  // square num and return the new value
  // code here
  var square = Math.pow(num, 2);
  return square;
}

function cube(num) {
  // cube num and return the new value
  // code here
  var cube = Math.pow(num, 3);
  return cube;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  var result = Math.pow(num, exponent);
  return result;
}

function roundNumber(num) {
  // round num and return it
  // code here
  var rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  // round num up and return it
  // code here
  var roundedUp = Math.ceil(num);
  return roundedUp;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  var excitedString = str + '!';
  return excitedString;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  var combinedNames = firstName + ' ' + lastName;
  return combinedNames;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  var triangleArea = 0.5 * base * height;
  return triangleArea;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  var circleArea = Math.round(Math.PI * radius * radius);
  return circleArea;
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  var rectPrismVolume = length * width * height;
  return rectPrismVolume;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
