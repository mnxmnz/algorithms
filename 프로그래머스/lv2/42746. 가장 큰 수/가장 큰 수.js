function solution(numbers) {
  const answer = numbers
    .map(n => n + '')
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');

  return answer[0]==='0'?'0':answer;
}
