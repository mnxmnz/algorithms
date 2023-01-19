function solution(quiz) {
  let answer = [];

  for (const x of quiz) {
    const [num, sum] = x.split(' = ');
    const sign = num.includes('+') ? 1 : -1;
    const [a, b] = num.split(sign === 1 ? ' + ' : ' - ');

    answer.push(Number(a) + sign * Number(b) === Number(sum) ? 'O' : 'X');
  }

  return answer;
}
