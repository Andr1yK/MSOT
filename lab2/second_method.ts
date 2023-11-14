function primeFactors(number: number): Set<number> {
  const factors = new Set<number>();
  let divisor = 2;

  while (number > 2) {
    if (number % divisor === 0) {
      factors.add(divisor);

      number /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

export function findGreatestCommonDivisor(a: number, b: number): number {
  const primeFactorsA = primeFactors(Math.abs(a));
  const primeFactorsB = primeFactors(Math.abs(b));

  let maxDivisor = 1;

  const commonFactors = new Set<number>();

  primeFactorsA.forEach((factor) => {
    if (primeFactorsB.has(factor)) {
      maxDivisor *= factor;
    }
  });

  return maxDivisor;
}
