function gcd(a, b) {
  const num = a % b;
  if (num === 0) return b;
  return gcd(b, num);
}

function solution(a, b) {
  let num = b / gcd(a, b);

  while (num % 2 === 0) {
    num /= 2;
  }

  while (num % 5 === 0) {
    num /= 5;
  }

  return num === 1 ? 1 : 2;
}
