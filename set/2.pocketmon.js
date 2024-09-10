// 문제 02.폰켓몬

// 1. 중복 제거
// 2. 뽑기

function solution(nums) {
  const set = new Set(nums);

  let answer = 0;

  const n = Math.floor(nums.length / 2);

  // 중복을 제거하고 뽑을 수 있는 종류보다 뽑아야하는 갯수가 많다면,
  // 중복을 제거한 갯수만큼 뽑을 수있다. 3개를 뽑아야하는데, 2종류만 있는경우
  if (n > set.size) {
    answer = set.size;
  } else {
    // 뽑아야하는 개수보다, 뽑을 수 있는 종류가 많은 경우
    answer = n;
  }

  return answer;
}

// const nums = [3, 3, 3, 2, 2, 4];
const nums = [3, 3, 3, 2, 2, 2];

const answer = solution(nums);
console.log(answer);
