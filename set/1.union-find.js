// 문제 01.유니온 파인드 알고리즘

function find(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  parents[x] = find(parents, parents[x]);

  return parents[x];
}

function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);

  parents[root2] = root1;
}

function solution(k, operations) {
  // 처음에 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);

  let n = k; // 집합의 개수를 저장할 변수

  for (const op of operations) {
    if (op[0] === 'u') {
      union(parents, op[1], op[2]);
    } else if (op[0] === 'f') {
      find(parents, op[1]);
    }

    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n;
}

const k = 3;
const operations = [
  ['u', 0, 1],
  ['u', 1, 2],
  ['f', 2],
];

const answer = solution(k, operations);
console.log(answer);
