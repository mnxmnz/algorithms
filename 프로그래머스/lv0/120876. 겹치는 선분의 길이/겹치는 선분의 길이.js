function solution(lines) {
  const map = new Map();

  for (const [min, max] of lines) {
    for (let i = min; i < max; i++) {
      const key = String(i) + String(i + 1);
      map.set(key, map.get(key) + 1 || 1);
    }
  }

  let answer = 0;

  for (const num of map.values()) {
    if (1 < num) answer++;
  }

  return answer;
}
