export function findDivisors(num: number): Set<number> {
  const divisors = new Set<number>();
  const sqrtNum = Math.sqrt(num);

  for (let i = 1; i <= sqrtNum; i++) {
    if (num % i === 0) {
      divisors.add(i);
      divisors.add(num / i);
    }
  }

  return divisors;
}

export function findGreatestCommonDivisor(a: number, b: number): number {
  const divisorsA = findDivisors(Math.abs(a));
  const divisorsB = findDivisors(Math.abs(b));

  let maxDivisor = 1;

  divisorsA.forEach((divisor) => {
    if (divisorsB.has(divisor) && divisor > maxDivisor) {
      maxDivisor = divisor;
    }
  });

  return maxDivisor;
}
