function solution(money, product) {
  const sorted = product.sort((a, b) => a[0] + a[1] - (b[1] + b[1]));
  const length = product.length;
  let answer = [];

  for (let i = 0; i < length; i++) {
    let pocket = money - (sorted[i][0] / 2 + sorted[i][1]);
    let count = 1;

    for (let j = 0; j < length; j++) {
      if (j !== i && pocket < sorted[j][0] + sorted[j][1]) {
        break;
      }
      if (j !== i && sorted[j][0] + sorted[j][1] <= pocket) {
        pocket -= sorted[j][0] + sorted[j][1];
        count += 1;
      }
    }

    answer.push(count);
  }

  return answer.sort((a, b) => b - a)[0];
}

console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ]),
);
