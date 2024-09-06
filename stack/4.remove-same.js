// 04.짝 지어 제거하기

// 1. 순회
// 2. 같은거 제거

// function solution(s) {
//   const stack = [];

//   for (let x of s) {
//     console.log(`x : ${x}, top:${stack[stack.length - 1]},stack:${stack}`);
//     if (stack[stack.length - 1] !== x) {
//       stack.push(x);
//     } else {
//       if (stack.length === 0) {
//         stack.push(x);
//       } else {
//         stack.pop();
//       }
//     }
//   }

//   return stack.length === 0 ? 1 : 0;
// }

function solution(s) {
  const stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
const s = 'baabaa';
const answer = solution(s);
console.log(answer);
