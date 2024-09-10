// 문제 01.깊이 우선 탐색 순회

function dfs(adjList, start, visited = new Set()) {
  // 방문
  visited.add(start);
  const result = [start];

  // 연결 된거 쭉 방문
  if (adjList[start]) {
    for (let neighbor of adjList[start]) {
      if (!visited.has(neighbor)) {
        result.push(...dfs(adjList, neighbor, visited));
      }
    }
  }

  return result;
}

function solution(graph, start) {
  const adjList = {};

  graph.forEach(([startNode, endNode]) => {
    if (!adjList[startNode]) {
      adjList[startNode] = [];
    }
    adjList[startNode].push(endNode);
  });

  const answer = dfs(adjList, start);

  return answer;
}

const graph = [
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'D'],
  ['D', 'E'],
];
const start = 'A';
const answer = solution(graph, start);

console.log(answer);
