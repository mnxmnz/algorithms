function solution(s) {
  for (let i = 0; i < s.length; i++) {
    s = s.replace('A', '#');
  }

  return s;
}

console.log(solution('BANANA'));

// 다른 풀이 방법 01

/*
function solution(s) {
  let answer = '';

  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }

  return answer;
}
*/

// 다른 풀이 방법 02

/*
function solution(s) {
  let answer = s;

  answer = answer.replace(/A/g, '#');

  return answer;
}
*/
