// 문제 02.문자열 해싱을 이용한 검색 함수 만들기

// queryList에 있는 값을 키로 stringList에 있는지 여부를 알아야한다.
// 즉 queryList 순회하면서 hashTable 생성
// hashTable[banana] = 1; hashTable[kiwi] = 0;

// 내 풀이

function makeHashTable(stringList, queryList) {
  const hashTable = new Map();

  // O(K)
  for (let str of queryList) {
    hashTable.set(str, 0);
  }

  // O(N)
  for (let str of stringList) {
    if (hashTable.has(str)) {
      hashTable.set(str, 1);
    }
  }

  return hashTable;
}

function solution(stringList, queryList) {
  const hashTable = makeHashTable(stringList, queryList);
  const answer = [...hashTable].map(v => {
    return v[1] === 1 ? true : false;
  });
  return answer;
}

const stringList = ['apple', 'banana', 'cherry'];
const queryList = ['banana', 'kiwi', 'melon', 'apple'];

const answer = solution(stringList, queryList);
console.log(answer);

// function polynomialHash(str) {
//   const p = 31; // 소수
//   const m = 1_000_000_007; // 버킷 크기
//   let hashValue = 0;

//   for (let i = 0; i < str.length; i++) {
//     hashValue = (hashValue * p + str.charCodeAt(i)) % m;
//   }

//   return hashValue;
// }

// // 참고 답안
// function solution(stringList, queryList) {
//   const hashList = stringList.map(str => polynomialHash(str));

//   const result = [];

//   for (const query of queryList) {
//     const queryHash = polynomialHash(query);
//     if (hashList.includes(queryHash)) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }

//   return result;
// }

// const stringList = ['apple', 'banana', 'cherry'];
// const queryList = ['banana', 'kiwi', 'melon', 'apple'];

// const answer = solution(stringList, queryList);
// console.log(answer);
