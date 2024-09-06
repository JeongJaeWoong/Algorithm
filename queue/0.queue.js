// 자료구조 Queue
// 선입선출 FIFO
// 예시 ) 이벤트 처리 순서
// 먼저 들어온 데이터를 먼저 처리해주는 특징

// Shift()를 이용한 Queue

const queue1 = [];

queue1.push(1);
queue1.push(2);
queue1.push(3);

let firstItem = queue1.shift();

// 배열을 이용하여 직접 Queue를 구현하는 방법

class Queue2 {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++]; // front가 가리키고 있는 값을 반환 한 후 한개 증가
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// 연결 리스트를 이용한 Queue

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue3 {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null; // 마지막 요소 참조
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 기존 마지막 요소의 다음에 연결
      this.tail = newNode; // 마지막 요소로 newNode를 가리킴
    }

    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const removeNode = this.head;
    this.head = this.head.next;

    // 기존 첫 번째 요소 제거 후 다음 요소(두번째 요소)가 없다면 tail도 null
    if (!this.head) {
      this.tail = null;
    }

    this.size--;

    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}
