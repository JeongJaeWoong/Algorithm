// 문제 04.전화번호 목록

// 1. 전화번호 순회
// 2. 그 전화번호있는지 포함하는지 검사

// N이 1000000이하라 이중 for문은 안된다.

function solution(phone_book) {
  phone_book.sort(); // 전화번호부 정렬

  //전화번호부에서 연속된 두 개의 전화번호 비교

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

const phone_book = ['119', '97674223', '1195524421'];
const answer = solution(phone_book);

console.log(answer);
