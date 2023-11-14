import { findGreatestCommonDivisor } from './second_method';
import * as faker from "faker";

describe('Second Algorithm', () => {
  test('Should find the greatest common divisor of two numbers', () => {
    expect(findGreatestCommonDivisor(0, 0)).toBe(1);
    expect(findGreatestCommonDivisor(0, 5)).toBe(1);
    expect(findGreatestCommonDivisor(5, 0)).toBe(1);
    expect(findGreatestCommonDivisor(5, 5)).toBe(5);
    expect(findGreatestCommonDivisor(10, 5)).toBe(5);
    expect(findGreatestCommonDivisor(14, 28)).toBe(14);
    expect(findGreatestCommonDivisor(21, 14)).toBe(7);
  });

  // Generate random test cases
  for (let i = 0; i < 999; i++) {
    const a = faker.datatype.number({ min: -100_000_000, max: 100_000_000 });
    const b = faker.datatype.number({ min: -100_000_000, max: 100_000_000 });

    test(`Should find the greatest common divisor of ${a} and ${b}`, () => {
      const gcd = findGreatestCommonDivisor(a, b);

      expect(gcd).toBeGreaterThanOrEqual(1); // GCD should be a positive integer
      expect(Math.abs(a % gcd)).toBe(0); // GCD should be a divisor of a
      expect(Math.abs(b % gcd)).toBe(0); // GCD should be a divisor of b
    });
  }
});
