function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
    } else {
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    }
  }

  dfs(0, 0);

  return answer;
}
