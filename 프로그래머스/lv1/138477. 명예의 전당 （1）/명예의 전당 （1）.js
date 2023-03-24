function solution(k, score) {
  let award = [];
  let answer = [];

  score.map(x => {
    award.length < k ? award.push(x) : award[0] < x && award.splice(0, 1, x);
    award = award.sort((a, b) => a - b);
    answer.push(award[0]);
  });

  return answer;
}
