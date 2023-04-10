function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push('D');

    if (a[i] === 1 && b[i] === 3) answer.push('A');
    else if (a[i] === 1 && b[i] === 2) answer.push('B');

    if (a[i] === 2 && b[i] === 1) answer.push('A');
    else if (a[i] === 2 && b[i] === 3) answer.push('B');

    if (a[i] === 3 && b[i] === 2) answer.push('A');
    else if (a[i] === 3 && b[i] === 1) answer.push('B');
  }

  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 다른 풀이 방법

/*
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A ';
    else answer += 'B ';
  }

  return answer;
}
*/
