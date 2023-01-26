function solution(progresses, speeds) {
  let answer = [];
  let count = 0;
  let days = 1;
  let progress = 0;

  while (progresses[0]) {
    progress = progresses[0] + speeds[0] * days;
    if (100 <= progress) {
      count++;
      progresses.shift();
      speeds.shift();
    } else {
      if (0 < count) {
        answer.push(count);
        count = 0;
      }
      days++;
    }
  }

  answer.push(count);

  return answer;
}
