function solution(s) {
  const str = s.toLowerCase();
  const length = str.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length - (i + 1)]) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(solution('goooG'));

// 다른 풀이 방법 01

/*
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();

  return s.split('').reverse().join('') === s ? 'YES' : 'NO';
}
*/
