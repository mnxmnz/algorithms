function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (10 <= coupon) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
  }

  return answer;
}
