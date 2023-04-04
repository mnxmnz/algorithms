function solution(nums) {
  const min = new Set([...nums]).size;
  const max = Math.floor(nums.length / 2);

  return min < max ? min : max;
}
