function solution(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];

      if (1 < count) {
        answer += count;
      }

      count = 1;
    }
  }

  return answer;
}

console.log(solution('KKHSSSSSSSE'));
