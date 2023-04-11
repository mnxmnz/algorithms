function solution(s, t) {
  let index = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      index.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (const x of index) {
      if (s[i] === t) {
        min = 0;
      } else if (Math.abs(i - x) < min) {
        min = Math.abs(i - x);
      }
    }

    answer.push(min);
  }

  return answer;
}

console.log(solution('teachermode', 'e'));

// 다른 풀이 방법

/*
function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}
*/
