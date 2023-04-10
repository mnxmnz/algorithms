function solution(n, s) {
  let num = 0;
  let answer = '';

  for (let x of s) {
    if (num < x.length) {
      answer = x;
      num = x.length;
    }
  }

  return answer;
}

console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));

// 다른 풀이 방법

/*
function solution(n, s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}
*/
