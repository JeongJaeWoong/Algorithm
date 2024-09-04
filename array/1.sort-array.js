// 문제 01 배열 정렬하기
// sort() = O(NLogN)

function solution(array) {
  const sortedArray = array.sort((a, b) => a - b);

  return sortedArray;
}

const array = [1, -5, 2, 4, 3];
const answer = solution(array);
console.log(answer);
