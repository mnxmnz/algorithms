function solution(n) {
  let answer = 0;

  while (0 < n) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      answer++;
    }
  }

  return answer;
}
