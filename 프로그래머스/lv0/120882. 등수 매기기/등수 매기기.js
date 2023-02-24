function solution(score) {
  const average = score.map(n => (n[0] + n[1]) / 2);
  const ranking = [...average].sort((a, b) => b - a);

  return average.map(n => ranking.indexOf(n) + 1);
}
