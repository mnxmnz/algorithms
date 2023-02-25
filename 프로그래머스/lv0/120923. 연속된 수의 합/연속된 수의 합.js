function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  const max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((n, i) => i + min);
}
