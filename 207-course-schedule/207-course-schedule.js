/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
 * Graph, DFS
 * numCourses: 필수 강의 수
 * prerequisites = [[1, 0]]: 1번 강의를 수강하기 위해 0번 강의 수강 필요
 * return: 그래프 사이클 존재 여부
 */

// 인접 리스트로 그래프 생성하는 함수
const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  // edge: [1, 0]
  for (let edge of edges) {
    // src = 1, dest = 0
    let [src, dest] = edge;
    // adjList [ [], [0] ]
    adjList[src].push(dest);
  }

  return adjList;
};

// DFS로 그래프에 사이클이 존재하는지 확인하는 함수
const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
  arrive[node]++;
  visited[node] = true;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      if (hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true;
    } else {
      if (depart[neighbor] === 0) return true;
    }
  }

  depart[node]++;

  return false;
};

// 메인 함수
const canFinish = function (numCourses, prerequisites) {
  const adjList = buildAdjList(numCourses, prerequisites);
  const visited = {};
  const arrive = Array.from({ length: numCourses }, () => 0);
  const depart = Array.from({ length: numCourses }, () => 0);

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
    }
  }

  return true;
};