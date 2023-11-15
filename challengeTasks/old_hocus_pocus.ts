const limit = 1_000_000_000;

export function oldHocusPocus(a: number, b: number, c: number): number {
  if (a === b && b === c) {
    return a;
  }

  let result = 1033 + c;

  while (!(result % 971 === a && result % 997 === b)) {
    result += 1033;
  }

  return result;
}
