import { oldHocusPocus } from './old_hocus_pocus';
import * as faker from "faker";

describe('Old Hocus Pocus', () => {
  it('should return 835049324 with parameters 5, 10, 15', () => {
    expect(oldHocusPocus(5, 10, 15)).toBe(835049324);
  });

  for (let i = 0; i < 1000; i++) {
    const a = faker.datatype.number({ min: 1, max: 100 });
    const b = faker.datatype.number({ min: 1, max: 100 });
    const c = faker.datatype.number({ min: 1, max: 100 });

    it(`should return correct with parameters ${a}, ${b}, ${c}`, () => {
      const result = oldHocusPocus(a, b, c);

      expect(result % 971).toBe(a);
      expect(result % 997).toBe(b);
      expect(result % 1033).toBe(c);
    });
  }
});
