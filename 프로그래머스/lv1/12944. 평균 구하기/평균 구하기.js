function solution(arr) {
  let answer = 0;
  let sum = 0;
  const length = arr.length;

  for (var i = 0; i < length; i++) {
    sum += arr[i];
  }

  answer = sum / length;

  return answer;
}