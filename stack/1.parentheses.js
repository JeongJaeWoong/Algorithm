// 문제 01. 괄호 짝 맞추기

// 최근에 삽입한 괄호를 대상으로 연산이 필요하다

function solution(s) {
  const stack = [];
  for (let x of s) {
    if (x === '(') {
      stack.push(x);
    } else if (x === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

const s = '(()())';
const answer = solution(s);
console.log(answer);
