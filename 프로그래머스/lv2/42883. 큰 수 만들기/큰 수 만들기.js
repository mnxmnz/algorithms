function solution(number, k) {
  const arr = [];
  let answer = '';

  for (let i = 0; i < number.length; i++) {
    // 숫자 문자열에서 현재 위치의 숫자
    const num = number[i];

    // 현재 숫자(num)와 배열 arr의 마지막 요소를 비교한다.
    // 현재 숫자가 더 크면 배열의 마지막 요소를 제거하고 k를 감소한다.
    // 이 과정을 반복하면 배열 arr에는 가장 큰 숫자가 저장된다.
    while (0 < k && arr[arr.length - 1] < num) {
      arr.pop();
      k--;
    }

    arr.push(num);
  }

  // 배열의 끝에서부터 k개의 숫자를 제거
  arr.splice(arr.length - k, k);
  answer = arr.join('');

  return answer;
}
