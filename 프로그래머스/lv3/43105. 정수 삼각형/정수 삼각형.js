// 점화식: dp[i][j] = Math.max(dp[i - 1][j -1], dp[i - 1][j]) + dp[i][j]

function solution(triangle) {
  // 삼각형의 꼭대기 값은 항상 고정, 윗줄에서 연산한 값이 없어서 반복문에 포함하지 않음
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      // null 값을 방지하기 위해 0을 넣음
      triangle[i][j] = Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0) + triangle[i][j];
    }
  }

  return Math.max(...triangle[triangle.length - 1]);
}
