function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  const nums = arr.map(num => Number(String(num).split('').reverse().join('')));
  nums.forEach(num => isPrime(num) && answer.push(num));

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 다른 풀이 방법

/*
function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;

    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}
*/
