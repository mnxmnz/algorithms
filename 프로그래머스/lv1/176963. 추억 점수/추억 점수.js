function solution(name, yearning, photo) {
  const score = new Map();

  name.forEach((n, index) => {
    score.set(n, yearning[index]);
  });

  return photo.map(names => names.reduce((acc, cur) => acc + (score.get(cur) || 0), 0));
}
