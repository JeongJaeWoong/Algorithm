// 문제 02.이진 탐색 트리 구현

// 1. 트리 생성
// 2. 순회하면서 탐색
// 3. 반환

// 내 풀이

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.leftNode = null;
//     this.rightNode = null;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     if (!this.root) {
//       this.root = new Node(value);
//     } else {
//       let currentNode = this.root;

//       while (true) {
//         // 추가하려는 값이 작다면 왼쪽으로
//         if (value < currentNode.value) {
//           if (currentNode.leftNode) {
//             currentNode = currentNode.leftNode;
//           } else {
//             currentNode.leftNode = new Node(value);
//             break;
//           }
//         } else {
//           if (currentNode.rightNode) {
//             currentNode = currentNode.rightNode;
//           } else {
//             currentNode.rightNode = new Node(value);
//             break;
//           }
//         }
//       }
//     }
//   }

//   search(value) {
//     if (!this.root) {
//       return;
//     }

//     let count = 1;

//     let currentNode = this.root;

//     while (true) {
//       if (currentNode.value === value) {
//         console.log(`${count}번만에 찾음`);
//         return value;
//       }

//       // 못찾으면 왼쪽으로 갈지 오른쪽으로 갈지 판단
//       // 왼쪽
//       if (currentNode.value > value) {
//         if (currentNode.leftNode) {
//           currentNode = currentNode.leftNode;
//         } else {
//           console.log();
//           console.log(currentNode, '왼쪽 더이상 없다?');
//           return;
//         }
//       } else {
//         if (currentNode.rightNode) {
//           currentNode = currentNode.rightNode;
//         } else {
//           console.log(currentNode, '오른쪽 더이상 없다.');
//           return;
//         }
//       }
//       count++;
//     }
//   }
// }

// function solution(lst, searchList) {
//   const answer = [];
//   const tree = new Tree();

//   for (let x of lst) {
//     tree.insert(x);
//   }

//   for (let x of searchList) {
//     if (tree.search(x)) {
//       answer.push(true);
//     } else {
//       answer.push(false);
//     }
//   }

//   return answer;
// }

// const lst = [5, 3, 8, 4, 2, 1, 7, 10];
// const searchList = [1, 2, 5, 6];
// // const lst = [1, 3, 5, 7, 9];
// // const searchList = [2, 4, 6, 8, 10];

// const answer = solution(lst, searchList);
// console.log(answer);

class Node {
  constructor(value) {
    this.leftNode = null;
    this.rightNode = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (currentNode.leftNode) {
            currentNode = currentNode.leftNode;
          } else {
            currentNode.leftNode = new Node(value);
            break;
          }
        } else {
          if (currentNode.rightNode) {
            currentNode = currentNode.rightNode;
          } else {
            currentNode.rightNode = new Node(value);
            break;
          }
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode = currentNode.rightNode;
      }
    }

    return currentNode;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  for (const x of list) {
    bst.insert(x);
  }

  const result = [];

  for (const x of searchList) {
    if (bst.search(x)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

const lst = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList = [1, 2, 5, 6];
// const lst = [1, 3, 5, 7, 9];
// const searchList = [2, 4, 6, 8, 10];

const answer = solution(lst, searchList);
console.log(answer);
