function solution(sides) {
    const leg = [...sides].sort((a, b) => a - b);
    return leg[2] < leg[0] + leg[1] ? 1 : 2;
}