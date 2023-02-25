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

function bfs(graph, start) {
  const queue = [start];
  const result = [];
  const visited = {};

  visited[start] = true;

  while (queue.length) {
    const currentVertex = queue.shift();
    result.push(currentVertex);

    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
}

console.log(bfs(graph, 'A'));
// ['A', 'B', 'C', 'D', 'G', 'H', 'I', 'E', 'F', 'J'];
