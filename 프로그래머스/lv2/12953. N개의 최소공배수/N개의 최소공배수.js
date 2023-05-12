function solution(arr) {
  if (arr.length === 1) return arr[0];

  let num = gcd(arr[0], arr[1]);
  let answer = (arr[0] * arr[1]) / num;

  arr.forEach(n => {
    num = gcd(answer, n);
    answer = (answer * n) / num;
  });

  return answer;
}

function gcd(a, b) {
  const num = a % b;

  if (num === 0) return b;

  return gcd(b, num);
}
