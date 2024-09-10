function insert(tree, value) {
  if (!tree[0]) {
    tree[0] = value;
    return;
  }

  let currentIdx = 0;

  while (true) {
    if (value < tree[currentIdx]) {
      let leftIdx = 2 * currentIdx + 1;
      if (tree[leftIdx] === undefined) {
        tree[leftIdx] = value;
        return;
      } else {
        currentIdx = leftIdx;
      }
    } else {
      let rightIdx = 2 * currentIdx + 2;
      if (tree[rightIdx] === undefined) {
        tree[rightIdx] = value;
        return;
      } else {
        currentIdx = rightIdx;
      }
    }
  }
}

function search(tree, value) {
  let currentIdx = 0;

  while (currentIdx < tree.length) {
    if (tree[currentIdx] === value) {
      return true;
    }

    if (value < tree[currentIdx]) {
      currentIdx = currentIdx * 2 + 1;
    } else {
      currentIdx = currentIdx * 2 + 2;
    }

    if (currentIdx >= tree.length || tree[currentIdx] === undefined) {
      return false;
    }
  }

  return false;
}

function solution(lst, searchList) {
  const tree = [];

  for (let value of lst) {
    insert(tree, value);
  }

  // 검색 리스트에 있는 값들을 탐색
  const answer = searchList.map(value => search(tree, value));
  return answer;
}

const lst = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList = [1, 2, 5, 6];

const answer = solution(lst, searchList);
console.log(answer);
