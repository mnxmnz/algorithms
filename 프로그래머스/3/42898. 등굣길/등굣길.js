function solution(m, n, puddles) {
  const MOD = 1000000007;
  const dp = Array.from(Array(m), () => Array(n).fill(0));

  for (const puddle of puddles) {
    const [x, y] = puddle;
    dp[x - 1][y - 1] = -1;
  }

  if (dp[0][1] === 0) {
    dp[0][1] = 1;
  }

  if (dp[1][0] === 0) {
    dp[1][0] = 1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === -1) {
        continue;
      }

      if (1 <= i && dp[i - 1][j] !== -1) {
        dp[i][j] += dp[i - 1][j] % MOD;
      }

      if (1 <= j && dp[i][j - 1] !== -1) {
        dp[i][j] += dp[i][j - 1] % MOD;
      }
    }
  }

  return dp[m - 1][n - 1] % MOD;
}
