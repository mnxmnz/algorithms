function solution(s) {
  let answer;

  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });

  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
