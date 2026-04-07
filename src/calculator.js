#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√ or sqrt)
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    case 'sqrt':
      return squareRoot(num1);
    default:
      throw new Error(`Unknown operation '${operation}'`);
  }
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate
};

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator <number1> <operation> <number2>');
    console.error('Operations: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ^ (power), sqrt (square root)');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
