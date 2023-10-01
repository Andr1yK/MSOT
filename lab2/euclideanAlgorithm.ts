export function euclideanAlgorithm(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b === 0) {
        return a;
    }

    return euclideanAlgorithm(b, a % b);
}
