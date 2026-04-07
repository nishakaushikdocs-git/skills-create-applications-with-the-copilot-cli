const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -10)).toBe(-15);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2, 5);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and get negative result', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(8, 0)).toBe(8);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3, 5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -5)).toBe(-30);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-3, -7)).toBe(21);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide and get decimal result', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(15, -3)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide small numbers', () => {
      expect(divide(1, 2)).toBe(0.5);
    });
  });

  describe('Calculate Function', () => {
    test('should perform addition using calculate', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should perform subtraction using calculate', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should perform multiplication using calculate', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should perform division using calculate', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for invalid operation', () => {
      expect(() => calculate(5, '%', 3)).toThrow('Unknown operation');
    });

    test('should throw error when dividing by zero in calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers in addition', () => {
      expect(add(1e10, 2e10)).toBe(3e10);
    });

    test('should handle very large numbers in multiplication', () => {
      expect(multiply(1e5, 2e5)).toBe(2e10);
    });

    test('should handle very small decimal numbers', () => {
      expect(divide(0.001, 2)).toBeCloseTo(0.0005, 5);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 5)).toBe(5);
    });

    test('should handle operations resulting in negative zero', () => {
      expect(subtract(0, 0)).toBe(0);
    });
  });
});
