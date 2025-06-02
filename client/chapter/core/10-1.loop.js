/* -------------------------------------------------------------------------- */
/*                                 While Loop                                 */
/* -------------------------------------------------------------------------- */

// 기본 while 반복문
/*
let i = 10;
while (i > 0) {
    // statement
    console.log(--i);    // 9 ~ 0까지
    // console.log(i--);    // 10 ~ 1까지
}
*/


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'Zustand', // 아이템 추가
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let i = 0;
while (i < frontEndDev.length) {
    // 7 같은 값보다는 배열 변화에 따라 루프 반복 횟수가 자동으로 조절되도록 설정
    console.log(frontEndDev[i]);
    i++;    
}

// while 문 (역순환 : 역방향)
let j = frontEndDev.length;
while (j > 0) {
    // 그냥 while(j) 만 넣어도 j = 0 = false 가 되는 순간 멈춤
    console.log(frontEndDev[--j]);
}

// 성능 진단 : 순환 vs. 역순환