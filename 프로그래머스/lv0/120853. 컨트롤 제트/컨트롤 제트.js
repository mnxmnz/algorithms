function solution(s) {
  const arr = [];

  s.split(' ').forEach(num => (num !== 'Z' ? arr.push(num) : arr.pop()));

  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}
