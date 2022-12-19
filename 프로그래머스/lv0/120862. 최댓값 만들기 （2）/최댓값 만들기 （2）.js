function solution(numbers) {
    const ascending = [...numbers].sort((a, b) => a - b);

    return Math.max(ascending[0] * ascending[1], ascending[ascending.length - 2] * ascending[ascending.length - 1]);
}