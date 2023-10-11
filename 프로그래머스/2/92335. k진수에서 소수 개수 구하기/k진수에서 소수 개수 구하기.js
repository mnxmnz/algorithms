function solution(n, k) {
  const num = n.toString(k);
  const arr = num.split('0');
  const prime = arr.filter(v => isPrime(Number(v)));

  return prime.length;
}

function isPrime(num) {
  // 공백('') 제거 조건
  // 자바스크립트의 공백은 false 반환
  if (!num || num === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
