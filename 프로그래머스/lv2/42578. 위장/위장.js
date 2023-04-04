function solution(clothes) {
  const map = new Map();
  let answer = 1;

  for (const c of clothes) {
    map.set(c[1], (map.get(c[1]) || 0) + 1);
  }

  for (let v of map.values()) {
    answer *= v + 1;
  }

  return answer - 1;
}