function solution(n, words) {
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1].split('').pop();
    const curr = words[i].split('').shift();
    const index = words.indexOf(words[i]);

    if (prev !== curr || i !== index) {
      const person = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;

      answer = [person, turn];
      break;
    }
  }

  return answer;
}