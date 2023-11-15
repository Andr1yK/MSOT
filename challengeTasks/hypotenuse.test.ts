import { hypotenuse } from './hypotenuse';
import * as faker from "faker";
describe('Hypotenuse', () => {
  for (let i = 0; i < 10000; i++) {
    const a = faker.datatype.number({ min: 1, max: 1000 });
    const b = faker.datatype.number({ min: 1, max: 1000 });
    const c = hypotenuse(a, b);

    test(`hypotenuse(${a}, ${b})`, () => {
      expect(c).toBeCloseTo(Math.sqrt(a * a + b * b), 6);
    });
  }
});
