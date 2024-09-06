// 문제 02.기능개발

// 1. 각 기능이 100센트까지 얼마?

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

// function solution(progresses, speeds) {
//   // O(N)
//   const restProgresses = progresses.map(progress => 100 - progress);

//   // O(N)
//   const needsDay = restProgresses.map((progress, index) => {
//     return Math.ceil(progress / speeds[index]);
//   });

//   const answer = [];
//   let count = 0;

//   const queue = new Queue();
//   for (let x of needsDay) {
//     queue.enqueue(x);
//   }

//   let value = queue.head.data;

//   while (!queue.isEmpty()) {
//     const headData = queue.head.data;
//     console.log(`v : ${value}, r : ${headData}`);
//     if (value >= headData) {
//       queue.dequeue();
//       count++;
//     } else {
//       answer.push(count);
//       count = 0;
//       value = headData;
//     }
//   }
//   answer.push(count);

//   return answer;
// }

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];

// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];

// const answer = solution(progresses, speeds);
// console.log(answer);

// 참고 답안

function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;

  const daysLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      // 배포 가능일이 현재 가장 늦은 배포일보다 빠르면
      count++;
    } else {
      // 배포 예정일이 기준 배포일보다 느리면
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);
  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

const answer = solution(progresses, speeds);
console.log(answer);
