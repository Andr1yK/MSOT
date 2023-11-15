import { euclideanAlgorithm } from './euclideanAlgorithm';
import * as faker from "faker";

describe('Euclid\'s Algorithm', () => {
  test('Should find the greatest common divisor of two numbers', () => {
    expect(euclideanAlgorithm(5, 5)).toBe(5);
    expect(euclideanAlgorithm(10, 5)).toBe(5);
    expect(euclideanAlgorithm(14, 28)).toBe(14);
    expect(euclideanAlgorithm(21, 14)).toBe(7);
  });

  test('Should find the greatest common divisor when one of the numbers is zero', () => {
    // If k is a non-zero integer, then k divides zero. ... So gcd(k, 0) = gcd(0,k) = k. However, gcd(0, 0) isn't defined.
    // All integers are common divisors of 0 and 0, so there is no greatest one.
    // source: http://mfleck.cs.illinois.edu/building-blocks/version-1.0/number-theory.pdf

    expect(euclideanAlgorithm(5, 0)).toBe(euclideanAlgorithm(0, 5));
    expect(euclideanAlgorithm(5, 0)).toBe(5);
    expect(euclideanAlgorithm(0, 5)).toBe(5);
  });

  // Generate random test cases
  for (let i = 0; i < 9999; i++) {
    const a = faker.datatype.number({ min: -100_000_000, max: 100_000_000 });
    const b = faker.datatype.number({ min: -100_000_000, max: 100_000_000 });

    test(`Should find the greatest common divisor of ${a} and ${b}`, () => {
      const gcd = euclideanAlgorithm(a, b);

      expect(gcd).toBeGreaterThanOrEqual(1); // GCD should be a positive integer
      expect(Math.abs(a % gcd)).toBe(0); // GCD should be a divisor of a
      expect(Math.abs(b % gcd)).toBe(0); // GCD should be a divisor of b
    });
  }
});
