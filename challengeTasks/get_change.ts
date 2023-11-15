export const getChange = (
  priceUAH: number,
  priceCoins: number,
  moneyUAH: number,
  moneyCoins: number,
): [number, number] => {
  const price = priceUAH * 100 + priceCoins;
  const money = moneyUAH * 100 + moneyCoins;

  const changeCoins = money - price;

  const changeUAH = Math.floor(changeCoins / 100);
  const changeCoinsLeft = changeCoins - (changeUAH * 100);

  return [changeUAH, changeCoinsLeft];
}

