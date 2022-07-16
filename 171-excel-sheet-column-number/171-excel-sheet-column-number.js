/**
 * @param {string} columnTitle
 * @return {number}
 */

/**
 * 알파벳은 26개씩 반복된다.
 * 알파벳으로 구성된 26진수로 생각한다.
 * 끝자리부터 Math.pow 함수를 이용해 26의 0, 1, 2 ... 제곱에 각 알파벳을 곱한 합을 반환한다.
 */

const titleToNumber = function (columnTitle) {
  let answer = 0;
  const alpStr = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  for (let i = 0; i < columnTitle.length; i++) {
    answer += Math.pow(26, columnTitle.length - i - 1) * (alpStr.indexOf(columnTitle[i]) + 1);
  }

  return answer;
};