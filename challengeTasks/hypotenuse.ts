export const hypotenuse = (a: number, b: number): number => {
  // calc and limit to 6 decimal places
  const c = Math.sqrt(a * a + b * b);

  return Math.round(c * 1_000_000) / 1_000_000;
}
