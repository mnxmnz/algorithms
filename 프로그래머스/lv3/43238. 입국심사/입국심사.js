function solution(n, times) {
  times.sort((a, b) => a - b);

  let min = 1;
  let max = n * times[times.length - 1];

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (n <= count) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return min;
}