function solution(board) {
  const length = board.length;
  const bomb = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        bomb.push([i, j]);
      }
    }
  }

  const danger = [...board];

  for (const [x, y] of bomb) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let dx = x + j;
        let dy = y + i;

        if (-1 < dx && dx < length && -1 < dy && dy < length) danger[dx][dy] = 1;
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (danger[i][j] !== 1) {
        answer++;
      }
    }
  }

  return answer;
}
