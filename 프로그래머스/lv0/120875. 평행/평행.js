function getSlope(dot1, dot2) {
  return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
}

function solution(dots) {
  if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
  if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
  if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;

  return 0;
}