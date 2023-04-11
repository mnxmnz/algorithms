function solution(arr) {
  let answer = 0;
  let max = 0;

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (max <= sum) {
      max = sum;
      answer = Math.max(answer, x);
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

// 다른 풀이 방법

/*
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (max < sum) {
      max = sum;
      answer = x;
    } else if(max === sum) {
      if(answer < x) answer = x;
    }
  }

  return answer;
}
*/
