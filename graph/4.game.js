// 문제 04.게임 맵 최단거리

// 1. 그래프 생성
// 2. 0,0 좌표에서 최단거리 구하기

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return;
    }

    const removeNode = this.front;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    this.size--;

    return removeNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function bfs(maps, start) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const queue = new Queue();
  queue.enqueue(start);

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const graph = Array.from({ length: n }, () => Array(m).fill(0));

  graph[start[0]][start[1]] = 1;
  visited[start[0]][start[1]] = true; // 방문

  while (queue.size !== 0) {
    const [x, y] = queue.dequeue();

    // 목표지점
    if (x === n - 1 && y === m - 1) {
      return graph[x][y];
    }

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        // 갈 수 있는곳이라면
        visited[nx][ny] = true;
        graph[nx][ny] = graph[x][y] + 1; // 거리 추가

        // [nx,ny]랑 연결된거 탐색하기 위해 삽입
        queue.enqueue([nx, ny]);
      }
    }
  }
  // 도착할 수 없는 경우
  return -1;
}

function solution(maps) {
  return bfs(maps, [0, 0]);
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
// const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]

console.log(solution(maps)); // 출력: 11
