function solution(str) {
  const num = str.replace(/[^0-9]/g, '');
  return Number(num);
}

console.log(solution('g0en2T0s8eSoft'));

// 다른 풀이 방법

/*
function solution(str) {
  let answer = '';

  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}
*/
