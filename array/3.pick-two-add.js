// 문제 03.두 개 뽑아서 더하기

// 1. 두개 뽑기
// 2. 더하기
// 3. 배열에 넣기
// 4. 중복 제거
// 5. 정렬

// 내 문제풀이

// function solution(numbers) {
//   const arr = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const sum = numbers[i] + numbers[j];
//       arr.push(sum);
//     }
//   }

//   const removedArray = [...new Set(arr)];

//   const sortedArray = removedArray.sort((a, b) => a - b);

//   return sortedArray;
// }

// const array = [2, 1, 3, 4, 1];
// const answer = solution(array);
// console.log(answer);

// 참고 답안

function solution(numbers) {
  const ret = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(ret)].sort((a, b) => a - b);
}

const array = [2, 1, 3, 4, 1];
const answer = solution(array);
console.log(answer);
