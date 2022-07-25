function solution(s, n) {
  let answer = '';
  let temp = '';
  const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let x of s.toUpperCase()) {
    if (alp.indexOf(x) === -1) {
      temp += ' ';
    } else if (26 <= alp.indexOf(x) + n) {
      temp += alp[alp.indexOf(x) + n - 26];
    } else {
      temp += alp[alp.indexOf(x) + n];
    }
  }

  for (let i in s) {
    if (s[i] === s[i].toUpperCase()) {
      answer += temp[i];
    } else {
      answer += temp[i].toLowerCase();
    }
  }

  return answer;
}