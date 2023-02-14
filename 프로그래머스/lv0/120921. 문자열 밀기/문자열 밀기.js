function solution(A, B) {
  if (A === B) return 0;

  let words = [...A];

  for (let i = 0; i < words.length; i++) {
    words.unshift(words.pop());
    if (words.join('') === B) return i + 1;
  }

  return -1;
}