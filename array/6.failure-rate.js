// 문제 06.실패율
// 실패율 : 스테이지에 도달했지만 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
// 실패율이 높은 스테이지부터 내림차순으로 반환

// 1. 1번 스테이지부터 N번째 스테이지까지 조사
// 2. 각 스테이지별 실패율 조사
// 3. 내림차순 정렬

// function solution(N, stages) {
//   const arr = [];
//   // 스테이지별 실패율 O(N^2)
//   for (let i = 1; i <= N; i++) {
//     let overCount = 0;
//     let stayCount = 0;

//     for (let stage of stages) {
//       if (i <= stage) overCount++;
//       if (i === stage) stayCount++;
//     }

//     // console.log(`i:${i}, overCount:${overCount}, stayCount: ${stayCount}`);
//     arr.push(stayCount / overCount);
//   }

//   const indexedArray = Array.from(arr, (rate, stage) => ({
//     stage: stage + 1,
//     rate,
//   }));

//   const sortedArray = indexedArray.sort((a, b) => {
//     if (a.rate !== b.rate) {
//       return b.rate - a.rate;
//     } else {
//       a.stage - b.stage;
//     }
//   });

//   const answer = Array.from(sortedArray, a => {
//     return a.stage;
//   });

//   return answer;
// }

// const N = 5;
// // const N = 4;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// // const stages = [4, 4, 4, 4, 4];

// const answer = solution(N, stages);

// console.log(answer);

// 참고 답안
function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0);

  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map(v => Number(v[0]));
}

const N = 5;
// const N = 4;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// const stages = [4, 4, 4, 4, 4];

const answer = solution(N, stages);

console.log(answer);
