class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    return this.heap[0];
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex][1] > this.heap[index][1]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallerChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index][1] > this.heap[smallerChildIndex][1]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const minHeap = new MinHeap();
  const visited = new Set();

  // 시작점부터 모든 노드까지의 거리 초기화 (무한대)
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  // 시작 노드를 힙에 추가
  minHeap.insert([start, 0]);

  // 힙이 빌 때까지 반복
  while (!minHeap.isEmpty()) {
    const [currentNode, currentDistance] = minHeap.remove();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    // 현재 노드의 이웃들에 대해 거리 갱신
    for (let neighbor in graph[currentNode]) {
      const distanceToNeighbor = graph[currentNode][neighbor];
      const totalDistance = currentDistance + distanceToNeighbor;

      // 기존의 거리보다 더 짧은 경로가 있으면 갱신
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        minHeap.insert([neighbor, totalDistance]);
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths); // { A: 0, B: 1, C: 3, D: 4 }
