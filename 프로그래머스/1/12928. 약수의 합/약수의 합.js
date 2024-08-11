function solution(n) {
  const sqrt = Math.sqrt(n);

  let sum = 0;

  for (let i = 1; i < sqrt; i++) {
    if (n % i === 0) {
      sum += i;
      sum += n / i;
    }
  }

  if (sqrt % 1 === 0) {
    sum += sqrt;
  }

  return sum;
}
