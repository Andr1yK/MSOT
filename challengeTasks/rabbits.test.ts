import { rabbits } from './rabbits';

describe('Rabbits', () => {
  it('should return 1 when months is 0 and toBeEaten is 10', () => {
    expect(rabbits(0, 10)).toBe(1);
  });

  it('should return 2 when months is 1 and toBeEaten is 10', () => {
    expect(rabbits(1, 10)).toBe(2);
  });

  it('should return 2048 when months is 100 and toBeEaten is 1024', () => {
    expect(rabbits(100, 1024)).toBe(2048);
  });

  it('should return 65536 when months is 16 and toBeEaten is 0', () => {
    expect(rabbits(16, 0)).toBe(65536);
  });
});
