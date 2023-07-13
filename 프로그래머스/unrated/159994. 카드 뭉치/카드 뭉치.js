function solution(cards1, cards2, goal) {
  for (const x of goal) {
    if (x === cards1[0]) {
      cards1.shift();
    } else if (x === cards2[0]) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
