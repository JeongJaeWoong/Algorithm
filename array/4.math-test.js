// 문제 04.모의고사

// 1. 각 학생 패턴 배열 생성
// 2. 각 학생 정답 체크 0 생성
// 3. 문제 1번부터 끝까지 정답 체크

// 내 문제풀이

// function solution(answers) {
//   const answer = [];

//   const a = [1, 2, 3, 4, 5];
//   const b = [2, 1, 2, 3, 2, 4, 2, 5];
//   const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const students = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === a[i % a.length]) students[0]++;
//     if (answers[i] === b[i % b.length]) students[1]++;
//     if (answers[i] === c[i % c.length]) students[2]++;
//   }

//   const max = Math.max(...students);

//   for (let i = 0; i < students.length; i++) {
//     if (students[i] === max) {
//       answer.push(i + 1);
//     }
//   }

//   return answer;
// }

// const answers = [1, 3, 2, 4, 2];
// const answer = solution(answers);
// console.log(answer);

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const hightestScores = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      hightestScores.push(i + 1);
    }
  }

  return hightestScores;
}

const answers = [1, 3, 2, 4, 2];
const answer = solution(answers);
console.log(answer);
