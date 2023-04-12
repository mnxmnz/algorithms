function solution(priorities, location) {
  let arr = priorities.map((priority, index) => ({ index: index, priority: priority }));
  let answer = [];

  while (arr.length !== 0) {
    const current = arr.shift();
    const isHighest = arr.some(v => current.priority < v.priority);

    if (isHighest) {
      arr.push(current);
    } else {
      answer.push(current.index);
    }
  }

  return answer.indexOf(location) + 1;
}