// 01.요세푸스 문제

// 1. N명이 1이 될때까지 반복
// 2. queue 생성
// 3. 1부터 K 까지 반복 K라면 제거

// 내 문제풀이

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   enqueue(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.size++;
//   }

//   dequeue() {
//     if (!this.head) {
//       return null;
//     }

//     const removeNode = this.head;
//     this.head = this.head.next;

//     if (!this.head) {
//       this.tail = null;
//     }

//     this.size--;

//     return removeNode.data;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
// }

// function solution(N, K) {
//   const queue = new Queue();

//   // Queue 생성 => O(N)
//   for (let i = 1; i <= N; i++) {
//     queue.enqueue(i);
//   }

//   // 탐색 => O(N * K)
//   while (queue.size !== 1) {
//     for (let j = 1; j <= K; j++) {
//       const removeData = queue.dequeue();

//       if (j !== K) {
//         queue.enqueue(removeData);
//       }
//     }
//   }

//   const answer = queue.dequeue();

//   return answer;
// }

// const N = 5;
// const K = 2;

// const answer = solution(N, K);
// console.log(answer);

// 참고 답안

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(data) {
    this.items.push(data);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }

    queue.pop();
  }

  return queue.pop();
}

const N = 5;
const K = 2;

const answer = solution(N, K);
console.log(answer);
