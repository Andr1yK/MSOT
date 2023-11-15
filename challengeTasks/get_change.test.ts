import { getChange } from './get_change';
import * as faker from "faker";

describe('Get change', () => {
  it('Should return change in coins and UAH', () => {
    const [
      changeUAH,
      changeCoins,
    ] = getChange(1, 50, 2, 0);

    expect(changeUAH).toBe(0);
    expect(changeCoins).toBe(50);
  });

  // Generate random test cases
  for (let i = 0; i < 999; i++) {
    const priceUAH = faker.datatype.number({ min: 0, max: 100 });
    const priceCoins = faker.datatype.number({ min: 0, max: 99 });
    const moneyUAH = faker.datatype.number({ min: priceUAH, max: 100 });
    const moneyCoins = faker.datatype.number({ min: priceCoins, max: 99 });

    it(`Should return change in coins and UAH for price: ${priceUAH}.${priceCoins} UAH and money: ${moneyUAH}.${moneyCoins} UAH`, () => {
      const [
        changeUAH,
        changeCoins,
      ] = getChange(priceUAH, priceCoins, moneyUAH, moneyCoins);

      expect(changeUAH).toBeGreaterThanOrEqual(0);
      expect(changeUAH).toBeLessThanOrEqual(moneyUAH - priceUAH);

      expect(changeCoins).toBeGreaterThanOrEqual(0);
      expect(changeCoins).toBeLessThanOrEqual(99);
    });
  }
});
