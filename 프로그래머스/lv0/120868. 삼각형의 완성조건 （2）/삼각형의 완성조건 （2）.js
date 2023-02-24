function solution(sides) {
  const [min, max] = sides.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 1; i < max; i++) {
    if (max < i + min) {
      answer++;
    }
  }

  for (let i = max; i < min + max; i++) {
    if (i < min + max) {
      answer++;
    }
  }

  return answer;
}
