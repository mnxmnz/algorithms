function solution(polynomial) {
  const arr = polynomial.split(' + ');

  const sumX = arr
    .filter(n => n.includes('x'))
    .map(n => n.replace('x', '') || '1')
    .reduce((acc, cur) => acc + Number(cur), 0);
  const sumN = arr.filter(n => !n.includes('x')).reduce((acc, cur) => acc + Number(cur), 0);

  let answer = [];

  if (sumX) answer.push(`${sumX === 1 ? '' : sumX}x`);
  if (sumN) answer.push(sumN);

  return answer.join(' + ');
}
