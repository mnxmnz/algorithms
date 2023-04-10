function solution(s) {
  return s.toUpperCase();
}

console.log(solution('ItisTimeToStudy'));

// 다른 풀이 방법 01

/*
function solution(s) {
  let answer = '';

  for (let x of s) {
    let num = x.charCodeAt();

    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}
*/

// 다른 풀이 방법 02

/*
function solution(s) {
  let answer = '';

  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}
*/
