function solution(n, lost, reserve) {
  const map = new Map();
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    map.set(i, 1);
  }

  reserve.forEach(v => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
  });

  lost.forEach(v => {
    if (map.has(v)) map.set(v, map.get(v) - 1);
  });

  for (let i = 1; i <= n; i++) {
    if (map.get(i) === 0) {
      if (map.get(i - 1) === 2) {
        map.set(i, map.get(i) + 1);
        map.set(i - 1, map.get(i - 1) - 1);
      } else if (map.get(i + 1) === 2) {
        map.set(i, map.get(i) + 1);
        map.set(i + 1, map.get(i + 1) - 1);
      }
    }
  }

  for (const [k, v] of map) {
    if (0 < v) answer++;
  }

  return answer;
}