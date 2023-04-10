function solution(day, arr) {
  let answer = 0;

  for (let i = 0; i < 7; i++) {
    if (arr[i] % 10 == day) answer++;
  }

  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

// 다른 풀이 방법

/*
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}
*/
