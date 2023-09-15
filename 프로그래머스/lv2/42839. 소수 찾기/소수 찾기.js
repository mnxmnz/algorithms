function solution(numbers) {
  const uniquePer = [...new Set(getPer(numbers))];
  const primePer = uniquePer.filter(v => isPrime(v));

  return primePer.length;
}

// 숫자 조합을 생성하는 함수
function getPer(num) {
  const per = [];
  const length = num.length;
  // 숫자 조각을 사용했는지 체크하는 배열
  let checked = Array.from({ length }, () => 0);

  function dfs(curPer) {
    // curPer: 현재까지 생성된 숫자 조합
    per.push(Number(curPer));

    // 숫자 조각을 하나씩 추가하면서 가능한 모든 조합 생성
    for (let i = 0; i < length; i++) {
      // 현재 숫자 조각을 사용하지 않았을 때만 조합에 추가
      if (checked[i] === 0) {
        checked[i] = 1;
        // 현재까지 생성된 숫자 조합에 num[i] 숫자 조각을 추가해서 새로운 조합 생성
        dfs(curPer + num[i]);
        // 해당 숫자 조각을 다른 조합에서 사용할 수 있도록 사용하지 않았다고 표시
        checked[i] = 0;
      }
    }
  }

  dfs('');
  // 배열의 첫 번째 요소는 빈 문자열이라서 제거
  per.shift();

  return per;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
