function GCD(a, b) {
  const num = a % b;
  if (num === 0) return b;
  return GCD(b, num);
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = GCD(denum, num);

  return [denum / gcd, num / gcd];
}
