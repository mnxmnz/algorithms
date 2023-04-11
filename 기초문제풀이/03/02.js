function solution(s) {
  const word = s.toLowerCase().replace(/[^a-z]/g, '');
  const length = word.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (word[i] !== word[length - (i + 1)]) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));

// 다른 풀이 방법

/*
function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, '');

  if (s.split('').reverse().join('') !== s) return 'NO';

  return 'YES';
}
*/
