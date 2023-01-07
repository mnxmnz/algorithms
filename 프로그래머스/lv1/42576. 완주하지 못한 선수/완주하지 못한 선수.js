function solution(participant, completion) {
  const map = new Map();

  participant.forEach(name => map.set(name, map.get(name) + 1 || 1));
  completion.forEach(name => map.set(name, map.get(name) - 1));

  for (const [k, v] of map) {
    if (v > 0) return k;
  }
}
