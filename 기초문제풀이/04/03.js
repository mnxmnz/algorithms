function solution(test) {
  const n = test[0].length;
  const m = test.length;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;

      for (let a = 0; a < m; a++) {
        let pi = 0;
        let pj = 0;

        for (let b = 0; b < n; b++) {
          if (test[a][b] === i) pi = b;
          else if (test[a][b] === j) pj = b;
        }

        if (pi < pj) count++;
      }
      if (count === m) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ]),
);
