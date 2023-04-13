function getMaxDivisor(n) {
  if (n === 1) return 0;

  const list = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      list.push(i);

      if (n / i <= 10000000) {
        return n / i;
      }
    }
  }

  if (0 < list.length) {
    return list[list.length - 1];
  }

  return 1;
}

function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(getMaxDivisor(i));
  }

  return answer;
}
