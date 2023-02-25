const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I'],
};

function dfs(graph, start) {
  const stack = [start];
  const result = [];
  const visited = {};

  visited[start] = true;

  while (stack.length) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    // graph[currentVertex].reverse() 로 수정하면 왼쪽으로 탐색
    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
}

console.log(dfs(graph, 'A'));
// ['A', 'C', 'I', 'J', 'H', 'G', 'B', 'D', 'F', 'E'];
