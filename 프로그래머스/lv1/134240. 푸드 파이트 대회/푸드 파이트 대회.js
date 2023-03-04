function solution(food) {
  let answer = [];

  for (let i = 1; i < food.length; i++) {
    answer.push(String(i).repeat(Math.floor(food[i] / 2)));
  }

  return answer.join('') + '0' + answer.reverse().join('');
}
