function solution(maps) {
  // 시작 지점 (0, 0)부터 시작하므로 1로 초기화
  let answer = 1;
  // 방문 여부를 나타내는 2D 배열
  let visited = maps;
  // BFS를 위한 큐
  let queue = [];
  // 상하좌우 이동을 위한 x 좌표
  const dx = [-1, 1, 0, 0];
  // 상하좌우 이동을 위한 y 좌표
  const dy = [0, 0, -1, 1];
  // 맵의 행 수
  const n = maps.length;
  // 맵의 열 수
  const m = maps[0].length;

  // 시작 지점을 큐에 추가
  queue.push([0, 0]);
  // 시작 지점은 방문했음을 표시 (0은 벽, 1은 아직 방문하지 않은 곳)
  visited[0][0] = 0;

  // 큐가 빌 때까지 반복
  while (0 < queue.length) {
    // 현재 큐의 크기를 저장하여 같은 레벨의 노드 처리
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      // 큐에서 하나의 노드를 꺼냄
      let [x, y] = queue.shift();

      // 상하좌우 이동 확인
      for (let j = 0; j < 4; j++) {
        // 다음 x 좌표 계산
        let nx = x + dx[j];
        // 다음 y 좌표 계산
        let ny = y + dy[j];

        // 다음 위치가 유효하고 아직 방문하지 않았다면 진행
        if (0 <= nx && nx < n && 0 <= ny && ny < m && visited[nx][ny] === 1) {
          // 목적지에 도달한 경우
          if (nx == n - 1 && ny == m - 1) {
            // 현재까지 움직인 횟수를 반환하고 종료
            return ++answer;
          }

          // 다음 위치를 큐에 추가
          queue.push([nx, ny]);
          // 방문 표시를 0으로 변경 (다시 방문하지 않도록)
          visited[nx][ny] = 0;
        }
      }
    }

    // 한 레벨의 탐색이 끝날 때마다 이동 횟수를 증가
    answer++;
  }

  // 목적지에 도달하지 못한 경우 -1 반환
  return -1;
}
