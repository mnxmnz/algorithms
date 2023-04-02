function solution(sizes) {
  const sorted = [...sizes].map(size => size.sort((a, b) => a - b));
  let w = 0;
  let h = 0;

  for (let i = 0; i < sorted.length; i++) {
    w = Math.max(sorted[i][0], w);
    h = Math.max(sorted[i][1], h);
  }

  return w * h;
}
