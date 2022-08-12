/**
 * 행렬 체인 곱셈(Matrix chain Multiplication)
 * DP
 */

function solution(matrix_sizes) {
  const len = matrix_sizes.length;
  const dp = new Array(len).fill().map(_ => new Array(len).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < len; i++) {
    dp[i][i] = 0;
  }

  for (let i = 1; i < len; i++) {
    for (let start = 0; start < len; start++) {
      const end = start + i;

      if (end >= len) break;

      for (let fixed = start; fixed < end; fixed++) {
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][fixed] +
            dp[fixed + 1][end] +
            matrix_sizes[start][0] *
              matrix_sizes[fixed + 1][0] *
              matrix_sizes[end][1],
        );
      }
    }
  }

  return dp[0][len - 1];
}