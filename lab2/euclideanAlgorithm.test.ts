import { euclideanAlgorithm } from './euclideanAlgorithm';
import * as faker from "faker";

// write a test that verifies that the function returns the correct value for a few different inputs

describe('Euclid\'s Algorithm', () => {
  test('Should find the greatest common divisor of two numbers', () => {
    expect(euclideanAlgorithm(10, 5)).toBe(5);
    expect(euclideanAlgorithm(14, 28)).toBe(14);
    expect(euclideanAlgorithm(21, 14)).toBe(7);
  });

  // Generate random test cases
  for (let i = 0; i < 999; i++) {
    const a = faker.datatype.number({ min: -100000, max: 100000 });
    const b = faker.datatype.number({ min: -100000, max: 100000 });

    test(`Should find the greatest common divisor of ${a} and ${b}`, () => {
      const gcd = euclideanAlgorithm(a, b);

      expect(gcd).toBeGreaterThanOrEqual(1); // GCD should be a positive integer
      expect(Math.abs(a % gcd)).toBe(0); // GCD should be a divisor of a
      expect(Math.abs(b % gcd)).toBe(0); // GCD should be a divisor of b
    });
  }
});
