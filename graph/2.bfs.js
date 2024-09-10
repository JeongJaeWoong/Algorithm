// 문제 03.너비 우선 탐색 순회

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//     this.size = 0;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);

//     if (!this.front) {
//       this.front = newNode;
//       this.rear = newNode;
//     } else {
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }

//     this.size++;
//   }

//   dequeue() {
//     if (!this.front) {
//       return;
//     }

//     const removeNode = this.front;

//     this.front = this.front.next;

//     if (!this.front) {
//       this.rear = null;
//     }

//     this.size--;

//     return removeNode.value;
//   }
// }

// function bfs(adjList, start) {
//   const queue = new Queue();
//   const visited = new Set();
//   visited.add(start);
//   queue.enqueue(start);

//   const result = [];

//   while (queue.size !== 0) {
//     const currentNode = queue.dequeue();
//     result.push(currentNode);

//     if (adjList[currentNode]) {
//       for (let neighbor of adjList[currentNode]) {
//         if (!visited.has(neighbor)) {
//           visited.add(neighbor); // 방문한 노드를 여기서 추가합니다.
//           queue.enqueue(neighbor);
//         }
//       }
//     }
//   }
//   return result;
// }

// function solution(graph, start) {
//   const adjList = {};

//   graph.forEach(([startNode, endNode]) => {
//     if (!adjList[startNode]) {
//       adjList[startNode] = [];
//     }

//     adjList[startNode].push(endNode);
//   });

//   const answer = bfs(adjList, start);
//   return answer;
// }

// const graph = [
//   [1, 2],
//   [1, 3],
//   [2, 4],
//   [2, 5],
//   [3, 6],
//   [3, 7],
//   [4, 8],
//   [5, 8],
//   [6, 9],
//   [7, 9],
// ];
// const start = 1;

// const answer = solution(graph, start);
// console.log(answer);

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  const adjList = {};

  for (let [u, v] of graph) {
    if (!adjList[u]) {
      adjList[u] = [];
    }

    adjList[u].push(v);
  }

  const visited = new Set();

  const queue = new Queue();
  queue.push(start);
  visited.add(start);
  const result = [start];

  while (!queue.isEmpty()) {
    const node = queue.pop();

    for (let neighbor of adjList[node] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }

  return result;
}

const graph = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
  [4, 8],
  [5, 8],
  [6, 9],
  [7, 9],
];
const start = 1;

const answer = solution(graph, start);
console.log(answer);
