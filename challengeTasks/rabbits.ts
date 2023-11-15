export const rabbits = (months: number, toBeEaten: number): number => {
  let rabbitsCount = 1;

  for (let currentMonth = 1; currentMonth <= months; currentMonth++) {
    if (rabbitsCount > toBeEaten) {
      rabbitsCount -= toBeEaten;
    }

    rabbitsCount *= 2;
  }

  return rabbitsCount;
}
