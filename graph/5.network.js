// 문제 05.네트워크

function dfs(computers, visited, i) {
  visited[i] = true;

  for (let idx = 0; idx < computers[i].length; idx++) {
    if (computers[i][idx] && !visited[idx]) {
      dfs(computers, visited, idx);
    }
  }
}

function solution(n, computers) {
  let answer = 0;

  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }

  return answer;
}

const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const answer = solution(n, computers);
console.log(answer);
