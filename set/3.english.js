// 문제 03.영어 끝말잇기

// 1. set 생성
// 2. words 순회
// 3. 찾기

function solution(n, words) {
  const set = new Set();

  let number = 0;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const prevWord = words[i - 1] ?? '';

    // 중복 단어 체크
    if (set.has(currentWord)) {
      number = (i % n) + 1;
      count = Math.floor(i / n) + 1;
      break;
    }

    // 끝말잇기 실패 여부 체크
    if (prevWord && prevWord[prevWord.length - 1] !== currentWord[0]) {
      number = (i % n) + 1;
      count = Math.floor(i / n) + 1;
      break;
    }

    set.add(currentWord);
  }

  return [number, count];
}

const n = 3;
const words = [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
];

const answer = solution(n, words);
console.log(answer);
