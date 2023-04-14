function solution(brown, yellow) {
  const sum = brown + yellow;
  const list = [];

  for (let i = 1; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) {
      list.push([sum / i, i]);
    }
  }

  return list.filter(n => n[0] * 2 + (n[1] - 2) * 2 === brown).flat();
}
