function solution(k, m, score) {
  const sortedScore = score.sort((a, b) => b - a);
  const result = [];

  for (let i = 0; i <= score.length - m; i += m) {
    result.push(sortedScore.slice(i, i + m));
  }

  return result.reduce((acc, cur) => acc + cur[m - 1] * m, 0);
}
