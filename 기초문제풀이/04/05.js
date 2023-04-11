function solution(n, k, card) {
  const set = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(card[i] + card[j] + card[k]);
      }
    }
  }

  return [...set].sort((a, b) => b - a)[k - 1];
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
