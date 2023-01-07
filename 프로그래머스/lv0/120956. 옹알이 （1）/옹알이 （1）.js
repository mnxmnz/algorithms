function solution(babbling) {
  let answer = 0;
  babbling.forEach(word => word.replace(/aya|ye|woo|ma/g, '') === '' && answer++);
  return answer;
}
