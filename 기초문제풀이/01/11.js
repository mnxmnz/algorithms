function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);

    if (65 <= ascii && ascii <= 90) answer++;
  }

  return answer;
}

console.log(solution('KoreaTimeGood'));

// 다른 풀이 방법 01

/*
function solution(s) {
  let answer = 0;

  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}
*/

// 다른 풀이 방법 02

/*
function solution(s) {
  let answer = 0;

  for (let x of s) {
    let num = x.charCodeAt();

    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}
*/
