function solution(common) {
  const n0 = common[0];
  const n1 = common[1];
  const n2 = common[2];
  const length = common.length - 1;

  return n2 - n1 === n1 - n0 ? common[length] + (n2 - n1) : common[length] * (n2 / n1);
}
