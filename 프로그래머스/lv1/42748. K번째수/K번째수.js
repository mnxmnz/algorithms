function solution(array, commands) {
  return commands.map(n => array.slice(n[0] - 1, n[1]).sort((a, b) => a - b)[n[2] - 1]);
}
