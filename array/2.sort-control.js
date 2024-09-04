// 문제 02.배열 제어하기

function solution(array) {
  const removedArray = [...new Set(array)]; // 중복제거 N

  const sortedArray = removedArray.sort((a, b) => b - a); // 내림차순 정렬 NLogN

  return sortedArray;
}

const array = [4, 2, 2, 1, 3, 4];
const answer = solution(array);
console.log(answer);
