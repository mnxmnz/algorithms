function solution(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) answer++;
  }

  return answer;
}

console.log(solution(str, 'COMPUTERPROGRAMMING'));

// 다른 풀이 방법 01

/*
function solution(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) answer++;
  }

  return answer;
}
*/

// 다른 풀이 방법 02

/*
function solution(s, t) {
  let answer = s.split(t).length - 1;

  return answer;
}
*/
