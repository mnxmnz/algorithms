function solution(N, stages) {
  const map = new Map();
  let total = stages.length;
  let answer = [];

  for (let i = 0; i < total; i++) {
    map.set(stages[i], map.get(stages[i]) + 1 || 1);
  }

  for (let i = 1; i <= N; i++) {
    answer.push([i, (map.get(i) || 0) / total]);
    total -= map.get(i) || 0;
  }

  answer.sort((a, b) => b[1] - a[1]);

  return answer.map(n => n[0]);
}
