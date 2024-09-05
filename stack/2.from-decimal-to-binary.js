// 02.10진수를 2진수로 변환하기

// 1. 10진수 2로 나누기
// 2. 나머지 배열에 삽입
// 3. 몫 2로 나누기

// 내 풀이

function solution(decimal) {
  const stack = [];
  while (decimal >= 1) {
    const rest = decimal % 2;
    // console.log(`decimal:${decimal},rest:${rest}`);
    stack.push(rest);
    decimal = Math.floor(decimal / 2);
  }

  let binary = '';

  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

const answer = solution(10);
console.log(answer);

// 참고 답안

// function solution(decimal) {
//   const stack = [];

//   while (decimal > 0) {
//     const remainder = decimal % 2;

//     stack.push(remainder);

//     decimal = Math.floor(decimal / 2);
//   }

//   let binary = '';

//   while (stack.length > 0) {
//     binary += stack.pop();
//   }

//   return binary;
// }

// const answer = solution(10);
// console.log(answer);
