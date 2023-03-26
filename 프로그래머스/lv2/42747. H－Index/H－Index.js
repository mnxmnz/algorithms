function solution(citations) {
  const sorted = citations.sort((a, b) => b - a);
  let index = 0;

  while (index + 1 <= sorted[index]) {
    index++;
  }

  return index;
}
