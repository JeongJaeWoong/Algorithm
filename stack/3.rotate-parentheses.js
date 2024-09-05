// 03.괄호 회전하기

// 1. 회전
// 2. 체크
// 3. 카운트

// function solution(s) {
//   const n = s.length;
//   let answer = 0;

//   for (let i = 0; i < s.length; i++) {
//     const stack = [];

//     let isCorrect = true;

//     for (let j = 0; j < n; j++) {
//       const c = s[(i + j) % n];

//       if (c === '[' || c === '(' || c === '{') {
//         stack.push(c);
//       } else {
//         if (stack.length === 0) {
//           isCorrect = false;
//           break;
//         }

//         const top = stack[stack.length - 1];
//         if (c === ']' && top === '[') {
//           stack.pop();
//         } else if (c === ')' && top === '(') {
//           stack.pop();
//         } else if (c === '}' && top === '{') {
//           stack.pop();
//         } else {
//           isCorrect = false;
//           break;
//         }
//       }
//     }

//     if (isCorrect && stack.length === 0) {
//       answer += 1;
//     }
//   }

//   return answer;
// }

function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < s.length; j++) {
      const c = s[(i + j) % n]; // 전체로 나누면 회전 역할

      if (c === '[' || c === '{' || c === '(') {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        if (c === ']' && stack[stack.length - 1] === '[') {
          stack.pop();
        } else if (c === '}' && stack[stack.length - 1] === '{') {
          stack.pop();
        } else if (c === ')' && stack[stack.length - 1] === '(') {
          stack.pop();
        }
      }
    }

    if (stack.length === 0 && isCorrect) {
      answer++;
    }
  }

  return answer;
}

const s = '[](){}';
const answer = solution(s);
console.log(answer);
