function solution(clothes) {
  let answer = 1;
  let map = new Map();

  clothes.forEach(cloth => {
    map.set(cloth[1], map.get(cloth[1]) + 1 || 1);
  });

  for (const n of map.values()) {
    answer *= n + 1;
  }

  return answer - 1;
}