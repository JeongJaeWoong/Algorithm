// 문제 01.두 개의 수로 특정 값 만들기

// n이 2이상 10000이하인걸로 보아서 시간복잡도를 크게 신경쓰지 않아도된다.

// arr의 값을 이용해서 target-x값에 접근할 수 있어야한다.
//

function countSort(arr, t) {
  const hashTable = Array(t + 1).fill(0);

  for (let x of arr) {
    if (x <= t) {
      hashTable[x] = 1;
    }
  }

  return hashTable;
}

function solution(arr, target) {
  const hashTable = countSort(arr, target);

  for (let x of arr) {
    const complement = target - x;

    if (
      complement !== x &&
      complement >= 0 &&
      complement <= target &&
      hashTable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

const arr = [1, 2, 3, 4, 8];
const target = 6;

const answer = solution(arr, target);
console.log(answer);
