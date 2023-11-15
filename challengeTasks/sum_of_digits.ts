export const sumOfDigits = (num: number): number => {
  let sum = 0;
  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}
