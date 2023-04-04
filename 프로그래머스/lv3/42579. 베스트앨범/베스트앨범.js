function solution(genres, plays) {
  const total = new Map();

  for (let i = 0; i < genres.length; i++) {
    total.set(genres[i], (total.get(genres[i]) || 0) + plays[i]);
  }

  const sortedTotal = [...total].sort((a, b) => b[1] - a[1]).map(n => n[0]);

  const songs = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (songs.has(genres[i])) {
      songs.set(genres[i], [...songs.get(genres[i]), [i, plays[i]]]);
    } else {
      songs.set(genres[i], [[i, plays[i]]]);
    }
  }

  const sortedSongs = [...songs].map(n => [n[0], n[1].sort((a, b) => b[1] - a[1] || a[0] - b[0]).map(n => n[0])]);

  const answer = [];

  for (let i = 0; i < sortedTotal.length; i++) {
    for (let j = 0; j < sortedSongs.length; j++) {
      if (sortedTotal[i] === sortedSongs[j][0]) {
        answer.push(sortedSongs[j][1][0]);

        if (1 < sortedSongs[j][1].length) {
          answer.push(sortedSongs[j][1][1]);
        }
      }
    }
  }

  return answer;
}