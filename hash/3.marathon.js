// 문제 03.완주하지 못한 선수

// 1. 참가자 해시 테이블 생성
// 2. 참가자 이름으로 접근
// 3. 완주하지 못한 사람 찾기

// 내 풀이

// function makeHashTable(participant) {
//   const hashTable = new Map();

//   // O(N)
//   for (let name of participant) {
//     if (hashTable.has(name)) {
//       const prev = hashTable.get(name);
//       hashTable.set(name, prev + 1);
//     } else {
//       hashTable.set(name, 1);
//     }
//   }

//   return hashTable;
// }

// function solution(participant, completion) {
//   const hashTable = makeHashTable(participant);

//   for (let name of completion) {
//     const prev = hashTable.get(name);
//     if (prev === 1) {
//       hashTable.delete(name);
//     } else if (prev > 1) {
//       hashTable.set(name, prev - 1);
//     }
//   }

//   const answer = [...hashTable].flat()[0];
//   return answer;
// }

// const participant = ['mislav', 'stanko', 'mislav', 'ana'];
// const completion = ['stanko', 'ana', 'mislav'];

// const answer = solution(participant, completion);
// console.log(answer);

// 참고 답안

function solution(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

const answer = solution(participant, completion);
console.log(answer);
