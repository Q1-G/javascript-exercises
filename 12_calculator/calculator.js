const add = function(a, b) {
	let answer = a + b
  return answer
};

const subtract = function(a, b) {
	let answer = a - b
  return answer
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a,b) {
	let answer = a ** b
  return answer
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
