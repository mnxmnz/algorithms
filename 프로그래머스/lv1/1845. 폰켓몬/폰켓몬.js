function solution(nums) {
  const hash = new Map();
  const len = nums.length;

  for (let x of nums) {
    hash.has(x) ? hash.set(x, hash.get(x) + 1) : hash.set(x, 1);
  }

  return hash.size <= len / 2 ? hash.size : len / 2;
}