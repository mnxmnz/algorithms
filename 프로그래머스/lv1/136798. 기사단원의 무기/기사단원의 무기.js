function divisors(num) {
  if (num === 1) return 1;

  let count = 0;

  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) count++;
  }

  return num % Math.sqrt(num) === 0 ? count * 2 + 1 : count * 2;
}

function solution(number, limit, power) {
  let nums = [];

  for (let i = 1; i <= number; i++) {
    nums.push(divisors(i));
  }

  return nums.reduce((acc, cur) => (cur <= limit ? acc + cur : acc + power), 0);
}
