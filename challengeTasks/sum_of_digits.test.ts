import { sumOfDigits } from './sum_of_digits';
import * as faker from "faker";

describe('Sum of digits', () => {
  it('Should return sum of each digit in num', () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(1234)).toBe(10);
    expect(sumOfDigits(12345)).toBe(15);
    expect(sumOfDigits(123456)).toBe(21);
    expect(sumOfDigits(1234567)).toBe(28);
    expect(sumOfDigits(12345678)).toBe(36);
    expect(sumOfDigits(123456789)).toBe(45);
  });

  // Generate random test cases
  for (let i = 0; i < 999; i++) {
    const num = faker.datatype.number({ min: 0, max: 1_000_000_000 });

    it(`Should return sum of each digit in ${num}`, () => {
      const sum = sumOfDigits(num);

      expect(sum).toBeGreaterThanOrEqual(0);
      expect(sum).toBeLessThanOrEqual(81);
    });
  }
});
