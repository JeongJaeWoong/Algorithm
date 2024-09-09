// 문제 01.트리 순회

// 1. 트리 생성
// 2. 탐색

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.leftNode = null;
//     this.rightNode = null;
//   }

//   setValue(value) {
//     this.value = value;
//   }

//   setLeft(node) {
//     this.leftNode = node;
//   }

//   setRight(node) {
//     this.rightNode = node;
//   }
// }

function preorder(nodes, idx, answer) {
  if (idx > nodes.length || nodes[idx] === undefined) {
    return answer;
  }

  answer.push(nodes[idx]); // 현재 노드를 배열에 추가
  preorder(nodes, idx * 2 + 1, answer); // 왼쪽 자식 순회
  preorder(nodes, idx * 2 + 2, answer); // 오른쪽 자식 순회
}

function inorder(nodes, idx, answer) {
  if (idx >= nodes.length || nodes[idx] === undefined) {
    return answer;
  }

  inorder(nodes, idx * 2 + 1, answer);
  answer.push(nodes[idx]);
  inorder(nodes, idx * 2 + 2, answer);
}
function postorder(nodes, idx, answer) {
  if (idx >= nodes.length || nodes[idx] === undefined) {
    return answer;
  }

  postorder(nodes, idx * 2 + 1, answer);
  postorder(nodes, idx * 2 + 2, answer);
  answer.push(nodes[idx]);
}

function solution(nodes) {
  const preanswer = [];
  preorder(nodes, 0, preanswer);

  const inanswer = [];
  inorder(nodes, 0, inanswer);

  const postanswer = [];
  postorder(nodes, 0, postanswer);

  return [preanswer, inanswer, postanswer];
}

const nodes = [1, 2, 3, 4, 5, 6, 7];
const answer = solution(nodes);
console.log(answer); // 한 줄로 출력
